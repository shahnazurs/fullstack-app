const express = require('express');
const mysql = require('mysql')
const dotenv = require('dotenv')

const env = dotenv.config().parsed;
console.log(env.PORT);

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
    console.log("header set....");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
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

app.delete("/employee/api/delete/:id", (req,res) =>{
    console.log("Delete .....");
    let sql=`delete from asla.employee where empno= ${req.params.id}`;

    dbconn.query(sql, (err, result) => {
        if(err)
            throw err;
            let sql="select * from asla.employee";

            dbconn.query(sql, (err, results) => {
                if(err)
                    throw err;
                res.send(results);
            })
    })
    
})