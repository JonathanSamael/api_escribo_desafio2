import express from "express";
import UserModel from "../models/db.js";
import bcrypt from "bcrypt";
import generateToken from "../Utils/generateToken.js";

const router = express.Router();

router.post("/register", async (req, res) => {
	const { email } = req.body;

	if (await UserModel.findOne({ email })) {
		return res.status(400).json({
			error: true,
			message: "Email já cadastrado",
		});
	}

	const user = await UserModel.create(req.body);

	user.senha = undefined;

	return res.status(201).json({ user, token: generateToken(user) });
});

router.post("/authenticate", async (req, res) => {
	const { email, senha } = req.body;

	const user = await UserModel.findOne({ email }).select("+senha");

	if (!user) {
		return res.status(400).json({
			error: true,
			message: "User não encontrado",
		});
	}

	const senhaCheck = await bcrypt.compare(senha, user.senha);

	if (!senhaCheck) {
		return res.status(400).json({
			error: true,
			message: "Senha incorreta",
		});
	}

	user.senha = undefined;

	return res.json({ user, token: generateToken(user) });
});

export default router;