const express = require("express");
const app = express ();
require("dotenv").config();
app.use(express.json());




app.get("/", (req, res) =>{
    res.json({message: "Email sytem is Running..."});

});

app.use("/api/email", require("./router/emailRoutes"));
app.listen(4000,()=>console.log ("server is running"));
