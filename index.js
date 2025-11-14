const express = require("express");
const app = express ();
require("dotenv").config();
app.use(express.json());




app.get("/", (req, res) =>{
    res.json({message: "Email sytem is Running..."})
})
app.listen(6000,()=>console.log ("server is running"));
