function Listar(req, res) {
    res.status(200).send("Listando empresas")
}

function ListarUmEmpresa(req, res) {
    res.status(200).send("Listando empresas")
}

function Inserir(req, res) {
    res.status(201).send("Inserindo uma empresa")
}

function Editar(req, res) {
    res.status(200).send("Editando uma empresa")
}

function Excluir(req, res) {
    res.status(200).send("Excluindo uma empresa")
}

export default { Listar, ListarUmEmpresa, Inserir, Editar, Excluir}