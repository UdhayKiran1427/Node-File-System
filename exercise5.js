const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/api/exercise5", (req, res) => {

    const filePath = path.join(__dirname, "lib", "users-info.txt");

    try {

        const data = fs.readFileSync(filePath, "utf8");

        const lines = data.split("\n");

        const users = [];

        lines.forEach(line => {

            if (line.trim() !== "") {

                const [name, age, gender, city] = line.split(",");

                users.push({
                    name: name.trim(),
                    age: Number(age),
                    gender: gender.trim(),
                    city: city.trim()
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

        res.json({
            message: "Error reading file: " + error.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});