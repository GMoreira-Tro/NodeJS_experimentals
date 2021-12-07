//#region Módulos
const Sequelize = require('sequelize')
const sql = new Sequelize("data01", "root", "sEnha1234#",
{
    host: "localhost",
    dialect: "mysql"
})
//#endregion

const postagens_table = sql.define("Postagens",
{
    Título:
    {
        type: Sequelize.STRING
    },
    Conteúdo:
    {
        type: Sequelize.TEXT
    }
});
postagens_table.sync()

module.exports = postagens_table