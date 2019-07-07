const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const port = 5550;
const testFolder = './images/';

app.use(express.static(__dirname + "/")); // css file

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/");
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname); // file.jpg
    }
});

app.use(multer({ storage: storage }).single("filedata"));

app.post("/", function (req, res, next) {
    let filedata = req.file;
    console.log(filedata);

    if (!filedata) res.send("Ошибка при загрузке файла!");

    else res.send("Файл загружен");
});

var imgs = fs.readdirSync(testFolder, (err, files) => {
    files.forEach((file) => {
        file = [file];
        return file;
    });
});

app.set("view engine", "ejs");

app.use("/", function (req, res) {
    res.render("index", {
        title: imgs,
    });
});

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});