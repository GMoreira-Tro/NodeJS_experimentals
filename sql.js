//Módulos
const Sequelize = require('sequelize')
const sql = new Sequelize("data01", "root", "sEnha1234#",
{
    host: "localhost",
    dialect: "mysql"
})

sql.authenticate().then
(
    () => console.log("Deu bom")
).catch
(
    (erro) => console.log(erro)
)

const Postagem = sql.define("Postagem", {
    Título: 
    {
        type: Sequelize.STRING
    },
    Conteúdo:
    {
        type: Sequelize.TEXT
    }

});
Postagem.sync()

Postagem.create
({
    Título: "Gay",
    Conteúdo: "Viadasso"    
})