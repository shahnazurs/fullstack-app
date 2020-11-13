const express = require('express');

let app = express();

const employee = [
    {
        empno: 3001,
        ename: "Shahnaz"
    },
    {
        empno:3002,
        ename: "Aslamah"
    }
];

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})


app.get("/", (req,res) =>{
    res.send(employee);
})