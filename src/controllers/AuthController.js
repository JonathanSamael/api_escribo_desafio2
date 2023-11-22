import express from "express";
import UserModel from "../models/db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {

	const {email} = req.body;

	if (await UserModel.findOne({email})) {
		return res.status(400).json({
			error: true,
			message: "Email já cadastrado"
		});
	}

	const User = await UserModel.create(req.body);
	
	return res.status(201).json({
		error: false,
		message: "Registrado com sucesso!",
		data: User,
	});
});

router.post("/authenticate", async (req, res) => {
	const {email, senha} = req.body;
    
	const user = await UserModel.findOne({email}).select("+senha");

	if(!user) {
		return res.status(400).json({
			error: true,
			message: "User não encontrado"
		});
	}
    
	const senhaCorreta = await bcrypt.compare(senha, user.senha);

	if(!senhaCorreta) {
		return res.status(400).json({
			error: true,
			message: "Senha incorreta"
		});
	}

	console.log(user);
	user.senha = undefined;

	return res.json(user);
});

export default router;