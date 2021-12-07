//#region Módulos
const express_module = require("express")
const express = express_module()
//#endregion

//#region Valores constantes
const PORT = 8081
//#endregion

console.log("Started server...")

express.get("/Aqui", (_req,res) => 
{
	message = ""
	for(i = 0; i < 1000000; i++)
	{
		message += "Te amo, Suâne\n"
	}
	res.send(message)
})
express.get("/Dois/:nome/:tamanho_do_pau", (req,res) =>
{
	res.send("<h1>Nome: " + req.params.nome +
	"</h1><h1>Tamanho do pito: " + req.params.tamanho_do_pau + "</h1>")
})
express.get("/html", (req,res) =>
{
	res.sendFile(__dirname + "/HTML/index.html")
})

express.listen(PORT)

