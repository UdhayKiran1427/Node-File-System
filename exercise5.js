const express = require("express");
const fs = require("fs");
const path = require("path");

module.exports =  (req, res) => {

    const filePath = path.join(__dirname, "lib", "users-info.txt");

    try {

        const data = fs.readFileSync(filePath, "utf8");

        const lines = data.split("\n");

        const users = [];

        lines.forEach(line => {

            if (line !== "") {

                const [name, age, gender, city] = line.split("|");

                users.push({
                    name: name,
                    age: Number(age),
                    gender: gender == 0 ? "Male" : "Female",
                    city: city
                });

            }

        });

        if (users.length === 0) {
            return res.json({
                message: "No user data found"
            });
        }

        res.json(users);

    } catch (error) {
        console.log(error)
        res.json({
            message: "Error reading file: " + error.message
        });

    }

};
