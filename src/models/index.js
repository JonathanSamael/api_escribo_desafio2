import mongoose from "mongoose";

mongoose
	.connect(
		"mongodb+srv://jonathansamael:VziHhbBuLP7p4d0t@apimongoescribo.dcfex99.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => console.log("Conectado com sucesso ao MongoDB"))
	.catch((error) => {
		console.log("Não foi possível se conectar ao MongoDB");
		console.log(error);
	});
mongoose.Promise = global.Promise;

export default mongoose;
