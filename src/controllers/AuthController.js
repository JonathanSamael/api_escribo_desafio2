import express from "express";
import UserModel from "../models/db.js";

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

export default router;