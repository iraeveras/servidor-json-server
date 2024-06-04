import { Router } from "express";

const routes = Router();

routes.get("/users", (req, res) => {
    res.status(200).send("Listando usuários")
});
routes.get("/users/:id", (req, res) => {
    res.status(200).send("Listando um usuários")
});
routes.post("/users", (req, res) => {
    res.status(200).send("Inserindo um usuário")
});
routes.put("/users/:id", (req, res) => {
    res.status(200).send("Editando um usuários")
});
routes.delete("/users/:id", (req, res) => {
    res.status(200).send("Excluindo um usuários")
});

export default routes;