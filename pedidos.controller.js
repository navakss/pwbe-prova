const pedidos = require("../data/pedidos.data");

const listar = (req, res) => {
    res.send(pedidos).status(201).end();
}

const buscar = (req, res) => {
    const code = req.params.code;4
    var pdd = "";

    pedidos.forEach((pedido, index) => {
        if(pedido.codigo === code) {
            pdd = pedido;
        }
    });

    if(pdd = "") {
        res.status(404).send("Pedido Não Encontrado").end();
    }

    else {
        res.status(200).send(pdd).end();
    }
}

const cadastrar = (req, res) => {
    const data = req.body;
    var confirmado = false;

    if(data.codigo === "") {
        res.status(404).send("É Obrigatório o Código no Cadastro");
    }

    if(data.quantidade < 1) {
        res.status(404).send("É Obrigatório o Pedido ter Mais de 1 Unidade no Cadastro");
    }

    if (confirmado = true) {
        pedidos.push(data);
        res.status(200).send("Cadastrado com Sucesso").end();
    }
}

const atualizar = (req, res) => {
    const pedid = req.body;
    var encontrei = false;

    pedidos.forEach((pedido, index) => {
        if(pedido.codigo === pedid.codigo) {
            pedidos[index] = pedid;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404).send("Pedido Não Encontrado").end();
    }

    else {
        res.staus(201).send("Atualizado com Sucesso").end();
    }
}

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar
}