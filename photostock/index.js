const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const crypto = require('crypto');
const sqlite3 = require('sqlite3').verbose();
const port = process.env.PORT || 5550;
const imgsFolder = './images/';

app.use(express.static(__dirname + "/")); // css file
app.use(express.static(__dirname + "/images"));

let db = new sqlite3.Database('./db/db_main.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the main SQlite database.');
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/");
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname); // file.jpg
    }
});

var fileFilter = (req, file, cb) => {
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

app.use(multer({ storage: storage, fileFilter: fileFilter }).single("filedata"));

app.post("/", function (req, res, next) {
    let filedata = req.file;
    let maxSize = 8388608; // 8388608 = 1 mb in bites

    console.log(filedata);
    res.redirect("/");

    // Сделать нормальное отображение ошибок!!
    if (!filedata) console.log("Ошибка при загрузке файла!");

    else if (filedata.size > maxSize) console.log("Недопустимый размер файла! Максимум 1 МБ");

    else console.log("Файл загружен.");
    
});

function checkFile() {
    try {
        let imgs = fs.readdirSync(imgsFolder);

        fs.statSync(imgsFolder);
        return imgs;

        // var imgs = fs.readdirSync(imgsFolder, (err, files) => {
        //     files.forEach((file) => {
        //         file = [file];
        //         return file;
        //     });
        // });

        // return imgs;
    }

    catch (e) {
        console.log("Folder does not exist.");
        fs.mkdirSync("images/");
        console.log("Folder was created.");
    }
}

function hashFiles() {
    var check = fs.readdirSync(imgsFolder);
    var hashesArr = [];

   /* fs.createReadStream(imgsFolder + check.toString())
        .pipe(crypto.createHash('md5').setEncoding('hex'))
        .on('finish', function () {
            let hashes = this.read();
            hashesArr.push(hashes);
            console.log(hashesArr);
            console.log(hashes); //the hash
        });
*/
}

checkFile();
hashFiles();

app.set("view engine", "ejs");

app.use("/", function (req, res) {
    res.render("index", {
        title: checkFile(),
    });
});

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});