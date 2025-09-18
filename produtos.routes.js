const express = require("express");
const router = express.Router();

const ProdutosController = require("../controllers/produtos.controller");

router.get("/produtos", ProdutosController.listar);
router.get("/produtos/:codigo", ProdutosController.buscar);
router.post("/produto",ProdutosController.cadastrar);
router.patch("/produto/:codigo", ProdutosController.atualizar);
router.delete("/produtos/:codigo", ProdutosController.apagar);

module.exports = router;