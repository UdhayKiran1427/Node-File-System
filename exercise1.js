const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;


function getFileContent(fileName) {

    const filePath = path.join(__dirname, 'lib', fileName);
    
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        return `Error reading ${fileName}: ${error.message}`;
    }
}

console.log("--- Console Output ---");
console.log("Readme Content:", getFileContent('readme.txt'));
console.log("Students Content:", getFileContent('students.csv'));
console.log("Index Content:", getFileContent('index.html'));
console.log("----------------------");

app.use("api", express.static("public"));
app.get('/api/exercise1', (req, res) => {
    const readmeContent = getFileContent('readme.txt');
    const studentsContent = getFileContent('students.csv');
    const indexContent = getFileContent('index.html');

    res.json({
        "readme": readmeContent,
        "student": studentsContent,
        "index": indexContent
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});