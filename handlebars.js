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
const postagens_table = require("./Postagens_table")
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
    postagens_table.create
    ({
        Título: req.body.A1,
        Conteúdo: req.body.A2
    }).then(() => res.redirect("/")).catch(err =>
    {
        res.send(err)
    })
})
express.get("/", (req,res) =>
{
    postagens_table.findAll().then((posts) =>
    {
        res.render("Postagens", 
        {
            posts: posts
        })
        console.log(posts.length)
    })
})
express.get("/delete/:id", (req,res) =>
{
    postagens_table.destroy({where: {'id': req.params.id}})
    .then(() => res.send("Deu")).catch((error) => res.send("não deu"))
})
//#endregion

express.listen(PORT)