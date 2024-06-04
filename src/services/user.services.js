const baseUrl = "http://192.168.2.56:3000/users"

function Listar(FunctiopnCallback) {
    FunctiopnCallback(null, {
        id: "1",
        first_name: "Irae",
        last_name: "Veras",
        email: "irae.online@gmail.com",
        permission_level: "admin",
        company_id: "1",
        active: true
    })
}
function Inserir() {

}
function Editar() {

}
function Excluir() {

}

export default { Listar, Inserir, Editar, Excluir}