import express from "express";
import configviewEngine from "./config/viewEngine";
import initwebRouters from "./routers/web";
import bodyParser from "body-parser";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;

//import connection from "./config/connectDB";

//test connection Db
//connection();

//configview engine
configviewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json()) //
//app.use(express.urlencoded({ extended: true }))

//init webroute
initwebRouters(app);

app.listen(port, () => {
  console.log("=>>JWT Backend Run Success On Port =" + port);
});
