const express = require('express');
const mysql = require('mysql')

let app = express();
const dbconn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "janas3001"
});

dbconn.connect((err) => {
    if(err)
        throw err;
    console.log("Connected");
});

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})


app.get("/", (req,res) =>{
    let sql="select * from asla.employee";

    dbconn.query(sql, (err, results) => {
        if(err)
            throw err;
        res.send(results);
    })
    
})