const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// fixed timestamp
const timestamp = "14-Apr-2022 11:15:45 AM";

app.get("/api/exercise4", (req, res) => {

    const filePath = path.join(__dirname, "lib", "debug.log");

    try {

        // read file
        const data = fs.readFileSync(filePath, "utf8");

        // split lines
        const lines = data.split("\n");

        // add timestamp to each line
        const updatedLines = lines.map(line => `${timestamp} ${line}`);

        // join lines again
        const updatedContent = updatedLines.join("\n");

        // write back to file
        fs.writeFileSync(filePath, updatedContent);

        res.json({
            message: "Timestamp added successfully"
        });

    } catch (error) {

        res.json({
            message: "Error updating file: " + error.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});