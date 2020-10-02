const express = require('express');
const router = express.Router();
const controller = require("../controller/musicaController")
//const cors = require("cors");


router.get('/musicas', controller.getMusicas)
router.get("/musicas/:id", controller.getMusicaByID)

router.get('/artistas', controller.getArtistas)
router.get("/artistas/:id", controller.getArtistasById)

router.get('/albuns', controller.getAlbuns)
router.get("/albuns/:nome", controller.getAlbumPorNome)

module.exports = router

