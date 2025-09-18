const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.send(clientes).end();
}

const buscar = (req, res) => {
    const cpf2 = req.params.cpf;
    var clt = "";

    clientes.forEach((cliente, index) => {
        if (cliente.cpf === cpf2) {
            clt = cliente;
        }
    });

    if (clt === "") {
        clt = "Cliente Não Encontrado";
    }
    

    res.send(clt).end();
}

const cadastrar = (req, res) => {
    const data = req.body;
    var confirmado = false;

    if(data.cpf === "") {
        res.status(404).send("É Obrigatório o CPF no Cadastro");
    }

    if (confirmado = true) {
        clientes.push(data);
        res.status(201).send("Cadastrado com Sucesso").end();
    }
}

module.exports = {
    listar,
    buscar,
    cadastrar
};