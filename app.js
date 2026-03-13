const express = require("express");

const app = express();
const PORT = 8000;
const exercise1 = require("./exercise1");
const exercise2 = require("./exercise2");
const exercise3 = require("./exercise3");
const exercise4 = require("./exercise4");
const exercise5 = require("./exercise5");
const exercise6 = require("./exercise6");
const exercise7 = require("./exercise7");
const exercise8 = require("./exercise8");


app.get('/api/exercise1' , exercise1);
app.get('/api/exercise2' , exercise2);
app.get('/api/exercise3' , exercise3);
app.get('/api/exercise4' , exercise4);
app.get('/api/exercise5' , exercise5);
app.get('/api/exercise6' , exercise6);
app.get('/api/exercise7' , exercise7);
app.get('/api/exercise8' , exercise8);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});


