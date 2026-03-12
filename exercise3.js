const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

function copyFile(fileName, newFile) {
    try {
        fs.copyFileSync(fileName, newFile);
        return "File copied successfully";
    } catch (error) {
        return "Error copying file: " + error.message;
    }
}

app.get("/api/exercise3", (req, res) => {

    const sourceFile = path.join(__dirname, "lib", "source.txt");
    const newFile = path.join(__dirname, "lib", "copied.txt");

    const resultMessage = copyFile(sourceFile, newFile);

    res.json({
        message: resultMessage
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});