import jwt from "jsonwebtoken";
import authSecret from "../config/secret.js";

function generateToken(user = {}) {
	return jwt.sign(
		{
			id: user.id,
			nome: user.nome,
		},
		authSecret.secret,
		{
			expiresIn: 3600,
		}
	);
}

export default generateToken;