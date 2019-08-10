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

function dbFolder() {
    let dbFolder = './db/';

    if (!fs.existsSync(dbFolder)) {
        fs.mkdirSync(dbFolder);

        console.log("Database successfully created!");
    }
}

dbFolder();

var db = new sqlite3.Database('./db/db_main.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }

    db.run('CREATE TABLE IF NOT EXISTS `hashes` (hash VARCHAR)');

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

function checkFolder() { // Проверка на существующую папку
    try {
        let imgs = fs.readdirSync(imgsFolder);

        fs.statSync(imgsFolder);
        return imgs; // Отправляет на клиента
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
        cb(null, file.originalname + Date.now()); // Format: file.jpg
    }
});

var fileFilter = (req, file, cb) => { // Также сделать проверку, основанную на хэше.
    let sqlCheck = `SELECT 1 FROM hashes LIMIT 1`;

    db.all(sqlCheck, [], (err, rows) => {
        if (err) {
            throw err;
        }

        else if (rows.length == 1) {
            cb(null, false);
        }
    });

    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }

    else {
        cb(null, false);
        console.log(`Недопустимое расширение файла: ${file.mimetype}`);
    }
};

var upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 8388608 }
}).single("filedata");


app.post("/", upload, function (req, res, next) { // Обработка запроса
    let filedata = req.file;
    //let maxSize = 8388608; // 8388608 = 1 mb in bites

    console.log(filedata);
    res.redirect("/");

    hashFiles(cb => { // Если файл успешно загружен - хэш идёт в базу данных
        console.log(cb);

        //let placeholders = hashesArr.map((hashesAr) => '(?)').join(',');
        let sql = `INSERT INTO hashes(hash) VALUES(?)`;
        let sqlCheck = `SELECT 1 FROM hashes WHERE hash = "${cb}" LIMIT 1`;

        db.all(sqlCheck, [], (err, rows) => {
            if (err) {
                throw err;
            }

            else if (rows.length == 0) {
                db.run(sql, cb, function (err) { // Добавление хеша в БД
                    if (err) {
                        return console.error(err.message);
                    }

                    console.log(`Rows inserted ${this.changes}`);
                });
            }
        });
    });
});

app.use(function (err, req, res, next) { // Обработчик ошибки
    if (err.code === 'LIMIT_FILE_SIZE') {
        console.log("File is too big");
        res.redirect("/");
    }

    // Handle any other errors
});

/* -------- VIEW -------- */

app.set("view engine", "ejs");

app.use("/", function (req, res) {
    res.render("index", {
        title: checkFolder(),
    });
});

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});