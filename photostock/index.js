const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const crypto = require('crypto');
const sqlite3 = require('sqlite3').verbose();
const port = process.env.PORT || 5550;
const imgsFolder = './images/';

app.use(express.static(__dirname + "/")); // css file

/* -------- DATABASE -------- */

var db = new sqlite3.Database('./db/db_main.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the main SQlite database.');
});

/* -------- FUNCTIONS -------- */

function hashFiles(cb) { // Хеширование файлов
    let imgsFiles = fs.readdirSync(imgsFolder);

    fs.statSync(imgsFolder);

    imgsFiles.forEach(arr => {
        fs.createReadStream(imgsFolder + arr)
            .pipe(crypto.createHash('md5').setEncoding('hex'))
            .on('finish', function () {
                let hashes = this.read();
                cb(hashes); // Отправка коллбека во внешний мир
            });
    })
}

function checkFile(cb) {
    let sql = `SELECT hash FROM hashes`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }

        rows.forEach((row) => {
            console.log(row.hash);
            cb(row.hash);
        });
    });
}

function checkFolder() { // Проверка на существующую папку
    try {
        let imgs = fs.readdirSync(imgsFolder);

        fs.statSync(imgsFolder);
        return imgs; // Отправляет на клиента

        /*
        // Бессмысленный вариант
        var imgs = fs.readdirSync(imgsFolder, (err, files) => {
            files.forEach((file) => {
                file = [file];
                return file;
            });
        });

        return imgs;
        */
    }

    catch (e) {
        console.log("Folder does not exist.");
        fs.mkdirSync("images/");
        console.log("Folder was created.");
    }
}

checkFolder();

/* -------- UPLOAD -------- */

var storage = multer.diskStorage({ // Download to folder /images
    destination: function (req, file, cb) {
        cb(null, "images/");
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname); // Format: file.jpg
    }
});

var fileFilter = (req, file, cb) => { // Также сделать проверку, основанную на хэше.
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }

    else {
        cb(null, false);
        console.log(`Недопустимое расширение файла: ${file.mimetype}`);
    }
}

var upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 600000 }
}).single("filedata");

app.post("/", upload, function (req, res, next) { // Обработка запроса
    let filedata = req.file;
    //let maxSize = 8388608; // 8388608 = 1 mb in bites

    console.log(filedata);
    res.redirect("/");

    /*
    hashFiles(cb => { // Если файл успешно загружен - хэш идёт в базу данных
        let hashesArr = [];

        hashesArr.push(cb);
        console.log(hashesArr);

        let placeholders = hashesArr.map((hashesAr) => '(?)').join(',');
        let sql = "INSERT INTO hashes(hash) VALUES " + placeholders;
        console.log(sql);

        db.run(sql, hashesArr, function (err) { // Добавление хеша в БД
            if (err) {
                return console.error(err.message);
            }

            console.log(`Rows inserted ${this.changes}`);
        });
    });
    console.log("Файл загружен.");
    */
});

app.use(function (err, req, res, next) { // Обработчик ошибки
    if (err.code === 'LIMIT_FILE_SIZE') {
        console.log("File is too big");
        res.redirect("/");
    }

    // Handle any other errors
})

/* -------- VIEW -------- */

app.set("view engine", "ejs");

app.use("/", function (req, res) {
    res.render("index", {
        title: checkFolder(),
    });
});

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);

    checkFile();
});