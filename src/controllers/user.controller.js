function Listar(req, res) {
    res.status(200).send("Listando usuários")
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