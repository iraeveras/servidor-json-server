import userServices from "../services/user.services.js"


function Listar(req, res) {
    userServices.Listar((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result)
        }
    })
    // res.status(200).send("Listando usuários")
}

function ListarUmUsuario(req, res) {
    res.status(200).send("Listando um usuários")
}

function Inserir(req, res) {
    res.status(201).send("Inserindo um usuário")
}

function Editar(req, res) {
    res.status(200).send("Editando um usuários")
}

function Excluir(req, res) {
    res.status(200).send("Excluindo um usuários")
}

export default { Listar, ListarUmUsuario, Inserir, Editar, Excluir}