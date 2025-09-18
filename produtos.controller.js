const produtos = require("../data/produtos.data");

const listar = (req, res) => {
    res.send(produtos).status(201).end();
}

const buscar = (req, res) => {
    const code = req.params.code;
    var prdt = "";

    produtos.forEach((produto, index) => {
        if (produto.codigo === code) {
            prdt = produto;
        }
    });

    if (prdt === "") {
        prdt = "Produto Não Encontrado";
        res.status(404).send(prdt).end();
    }

    else res.status(201).send(prdt).end();
}

const cadastrar = (req, res) => {
    const data = req.body;
    var confirmado = false;

    if(data.codigo === "") {
        res.status(404).send("É Obrigatório o Código no Cadastro");
        confirmado = true;
    }

    if (confirmado = true) {
        produtos.push(data);
        res.status(201).send("Cadastrado com Sucesso").end();
    }
}

const atualizar = (req, res) => {
    const produt = req.body;
    var encontrei = false;

    produtos.forEach((produto, index) => {
        if(produto.codigo === produt.codigo) {
            produtos[index] = produt;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404).send("Produto Não Encontrado").end();
    }

    else {
        res.status(200).send("Atualizado com Sucesso").end();
    }
}

const apagar = (req, res) => {
    const codigo = req.params.codigo;
    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.codigo === codigo) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).send("Produto Não Encontrado").end();
    }

    else {
        produtos.splice(indice, 1);
        res.status(200).send("Apagado com Sucesso").end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar,
    apagar
}