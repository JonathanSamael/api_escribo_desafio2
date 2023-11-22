import express from "express";
import AuthControler from "./controllers/AuthController.js";

const app = express();
app.use(express.json());

app.use("/auth", AuthControler);


app.get("/", (req, res) => {
	res.send("Bem vindo!");
});

export default app;