const express = require('express');
const app = express();
const multer = require('multer');
const port = 5550;

app.use(express.static(__dirname + "/")); // css file

app.set("view engine", "ejs");

app.use("/", function (req, res) {
    res.render("index", {
        title: "",
    });
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/");
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname); // file.jpg
    }
});

app.use(multer({ storage: storage }).single("filedata"));

app.post("/upload", function (req, res, next) {
    let filedata = req.file;

    if (!filedata) res.send("Ошибка при загрузке файла!");

    else res.send("Файл загружен");
});

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});