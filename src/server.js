import express from "express";
import configviewEngine from "./config/viewEngine";
import initwebRouters from "./routers/web";
require("dotenv").config();
const app =express();
const port =process.env.PORT||8080 ;

//configview engine
configviewEngine(app);

//init webroute
initwebRouters(app);


app.listen(port,()=>{
    console.log("=>>JWT Backend Run Success On Port ="+port)
})