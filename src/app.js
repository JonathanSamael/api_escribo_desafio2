import express from "express";
import AuthController from "./controllers/AuthController.js";
import UsersController from "./controllers/UsersController.js";
import AuthenticateMiddleware from "./middlewares/authenticate.js";

const app = express();
app.use(express.json());

app.use("/auth", AuthController);
app.use("/admin", AuthenticateMiddleware, UsersController);

app.get("/", (req, res) => {
	res.send("Bem vindo!");
});

export default app;