'use strict'
import { userBaseURL } from "./scripts/variables/variables.js"

async function getUser() {
    const response = await fetch(userBaseURL);
    const users = await response.json()
    return users;
}

function listUsers() {
    getUser().then(user => {
        let listUser = `
        <p>${user.id}</p>
        <p>${user.first_name}</p>
        <p>${user.last_name}</p>
        <p>${user.email}</p>
        <p>${user.permission_level}</p>
        <p>${user.company_id}</p>
        <p>${user.active}</p>
        
        `
        console.log(listUser);
    })

}

listUsers()