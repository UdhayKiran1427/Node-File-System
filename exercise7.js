const express = require("express");
const path = require("path");
const XLSX = require("xlsx");

const app = express();
const PORT = 3000;

app.get("/api/exercise7", (req, res) => {

    try {

        const filePath = path.join(__dirname, "lib", "users-info.xlsx");

        // Read Excel file
        const workbook = XLSX.readFile(filePath);

        // Get first sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet to JSON
        const data = XLSX.utils.sheet_to_json(sheet);

        if (data.length === 0) {
            return res.json({
                message: "Excel file contains no data"
            });
        }

        res.json(data);

    } catch (error) {

        res.json({
            message: "Error reading Excel file: " + error.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});