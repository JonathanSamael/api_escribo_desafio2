import mongoose from "mongoose";

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;

mongoose
	.connect(
		`mongodb+srv://${mongoUser}:${mongoPass}@apimongoescribo.dcfex99.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log("Conectado com sucesso ao MongoDB"))
	.catch((error) => {
		console.log("Não foi possível se conectar ao MongoDB");
		console.log(error);
	});
mongoose.Promise = global.Promise;

export default mongoose;
