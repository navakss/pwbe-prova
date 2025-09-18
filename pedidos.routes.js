const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller");

router.get("/pedidos", PedidosController.listar);
router.get("/pedidos/:codigo", PedidosController.buscar);
router.post("/pedido", PedidosController.cadastrar);
router.patch("/pedido/:codigo", PedidosController.atualizar);

module.exports = router;
