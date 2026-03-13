const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

module.exports =  (req, res) => {

    try {

        const users = [
            { name: "Anand", age: 22, gender: 0, city: "Mumbai" },
            { name: "Bihu", age: 17, gender: 1, city: "Pune" },
            { name: "Rahul", age: 25, gender: 0, city: "Delhi" },
            { name: "Sara", age: 28, gender: 1, city: "Hyderabad" }
        ];


        const lines = users.map(user =>
            `${user.name} | ${user.age} | ${user.gender} | ${user.city}`
        );

        const filePath = path.join(__dirname, "lib", "users-info.txt");

        fs.writeFileSync(filePath, lines.join("\n"));

        res.json({
            message: "User information written successfully"
        });

    } catch (error) {

        res.json({
            message: "Error writing user information: " + error.message
        });

    }

};

