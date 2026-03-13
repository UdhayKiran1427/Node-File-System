const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

function generateRandomWord(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let word = "";

    for (let i = 0; i < length; i++) {
        word += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return word;
}

module.exports =  (req, res) => {

    const words = [];

    for (let i = 0; i < 100; i++) {
        words.push(generateRandomWord(10));
    }

    const filePath = path.join(__dirname, "lib", "random-words.txt");

    fs.writeFileSync(filePath, words.join("\n"));

    const sample = words.slice(0, 10);

    res.json({
        message: "Random words generated successfully",
        sample: sample
    });

};

