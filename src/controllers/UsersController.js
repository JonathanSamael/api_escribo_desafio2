import express from "express";
import UserModel from "../models/db.js";

const router = express.Router();

router.get("/users/:id", async (req, res) => {
    
	const userId = req.params.id;
	const user = await UserModel.findById(userId);

	if(!user) {
		return res.status(404).json({
			error: true,
			message: "Usuário não encontrado",
		});
	}

	return res.json({
		nome: user.nome,
		email: user.email,
	});

});

export default router;