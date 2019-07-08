const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const port = process.env.PORT || 5550;

app.use(express.static(__dirname + "/")); // css file

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
    //let maxSize = 8388608; // 8388608 = 1 mb in bites

    console.log(filedata);
    res.redirect("/");

    /*
    if (!filedata) res.send("Ошибка при загрузке файла!");

    else if (filedata.size > maxSize) res.send("Недопустимый размер файла! Максимум 1 МБ");

    else res.send("Файл загружен");
    */
});

function checkFile() {
    try {
        let imgsFolder = './images/';
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

checkFile();

app.set("view engine", "ejs");

app.use("/", function (req, res) {
    res.render("index", {
        title: checkFile(),
    });
});

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
});