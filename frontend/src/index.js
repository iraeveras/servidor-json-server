'use strict'
import { userBaseURL } from "./scripts/variables/variables.js"

async function getUser() {
    const response = await fetch(userBaseURL);
    const users = await response.json()
    console.log(users);
}

getUser()