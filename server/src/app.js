const express = require("express")
const app = express()
const router = require("./routes/musicasRoutes")

//rotas
app.use("/", router)




module.exports = app