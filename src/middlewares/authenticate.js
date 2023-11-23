import jwt from "jsonwebtoken";
import authSecret from "../config/secret.js";

function middlewareAuthenticate(req, res, next) {

	const authHeader = req.headers.authorization;
	const checkToken = authHeader.split(" ");
	const [scheme, token ] = checkToken;

    
	if(!checkToken){
		return res.status(401).json({
			error: true,
			message: "Token não fornecido"
		});
	}

	if(scheme.indexOf("Bearer") !== 0) {
		return res.status(401).json({
			error: true,
			message: "Não autorizado"
		});
	}

	jwt.verify(token, authSecret.secret, (error, decoded) => {
		if(error) {
			console.log(error);
			return res.status(401).json({
				error: true,
				message: "Sessão inválida"
			});
		}

		req.userLogged = decoded;

		return next();
	});

}

export default middlewareAuthenticate;