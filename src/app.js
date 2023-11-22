import express from "express";
import db from "./models/db.js";
import AuthControler from "./controllers/AuthController.js";

const app = express();
app.use(express.json());

app.use("/auth", AuthControler);


app.get("/", (req, res) => {
	res.send("Bem vindo!");
});

app.get("/users", (req, res) => {
	res.send(db);
});



export default app;