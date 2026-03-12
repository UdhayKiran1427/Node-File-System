const express = require("express");
const path = require("path");
const XLSX = require("xlsx");

const app = express();
const PORT = 3000;

app.get("/api/exercise8", (req, res) => {

    try {
        const users = [
            { name: "Anand", age: 22, gender: 0, city: "Mumbai" },
            { name: "Udhay", age: 19, gender: 0, city: "Surat" },
            { name: "Rahul", age: 25, gender: 0, city: "Delhi" },
            { name: "Sara", age: 28, gender: 1, city: "Hyderabad" }
        ];

        // Convert JSON to worksheet
        const worksheet = XLSX.utils.json_to_sheet(users);

        // Create workbook
        const workbook = XLSX.utils.book_new();

        // Append worksheet
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

        // File path
        const filePath = path.join(__dirname, "lib", "users.xlsx");

        // Write Excel file
        XLSX.writeFile(workbook, filePath);

        res.json({
            message: "Data written to Excel successfully"
        });

    } catch (error) {

        res.json({
            message: "Error writing Excel file: " + error.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});