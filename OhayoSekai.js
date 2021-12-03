//#region Módulos
const APISample = require("./APISample")
const http = require('http')
//#endregion

//#region Valores constantes
const PORT = 8081
//#endregion

APISample.something()
APISample.something2(3.1415926537)

http.createServer((req,res) => 
{
    res.end("oioioi :3 ´~^")
}).listen(PORT)
console.log("Server aberto ´~^")