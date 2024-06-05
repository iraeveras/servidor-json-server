import { baseUrl } from "../config/api.js";

async function getApiUser() {
    const response = await fetch(`${baseUrl}/users`);
    return await response.json()
}

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