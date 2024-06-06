'use strict'
import { baseURL } from "./scripts/variables/variables.js";
import { inputFirstName, inputLastName, inputEmail, inputPemission, inputCompanyId, inputActive, btnCadastrar  } from "./scripts/variables/variables.js";

async function getUser() {
    const response = await fetch(`${baseURL}/users`);
    const users = await response.json()
    return users;
}

async function inserirUser(newUser) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }

    const response = await fetch(`${baseURL}/users`, options)
    if (response.ok) {
        console.log("Usuário cadastrado");
    } else {
        console.log("Erro ao cadastrar o usuário");
    }
}

function registerUser() {

    const dataUser = {
        first_name: inputFirstName.value,
        last_name: inputLastName.value,
        email: inputEmail.value,
        permission_level: inputPemission.value,
        company_id: inputCompanyId.value,
        active: inputActive.value
    }


    if (dataUser.first_name === "") return
    if (dataUser.last_name === "") return
    if (dataUser.email === "") return
    if (dataUser.permission_level === "") return
    if (dataUser.company_id === "") return
    if (dataUser.active === "") return

    inserirUser(dataUser)
}


let listUser = ""

function listUsers() {
    getUser().then(user => {
        user.forEach(item => {

            listUser = `
                <tr>            
                    <td>${item.id}</td>
                    <td>${item.first_name}</td>
                    <td>${item.last_name}</td>
                    <td>${item.email}</td>
                    <td>${item.permission_level}</td>
                    <td>${item.company_id}</td>
                    <td>${item.active}</td>
                </tr>
            
            `
            document.getElementById("user-list").innerHTML += listUser
        })

    })

}

listUsers()

btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault()
    registerUser()
})
