//#region Módulos
const Sequelize = require('sequelize')
const sql = new Sequelize("data01", "root", "sEnha1234#",
{
    host: "localhost",
    dialect: "mysql"
})
const express_module = require("express")
const express = express_module()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
//#endregion

//#region Valores constantes
const PORT = 8081
//#endregion

//#region Configuration of modules
const hbs = handlebars.create({
    helpers: 
    {
        getStringifiedJson: function (value) 
        {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});
express.engine("handlebars", hbs.engine)
express.set("view engine", "handlebars")

express.use(bodyParser.urlencoded({extended: false}))
express.use(bodyParser.json())
//#endregion

//#region Rotas
express.get("/cad", (req, res) =>
{
    res.render("form")
})
express.post("/post", (req,res) =>
{
    res.send(req.body.A1 + "\n" + req.body.A2)
})
//#endregion

express.listen(PORT)