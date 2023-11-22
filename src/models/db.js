import mongoose from "./index.js";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
	nome: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	senha: {
		type: String,
		require: true,
		select: false,
	},
	telefone: {
		type: String,
		require: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

UserSchema.pre("save", async function() {
	const senhaHash = await bcrypt.hash(this.senha, 10);
	this.senha = senhaHash;
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
