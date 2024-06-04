import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/users", (req, res) => {
    res.status(200).send("Listando usuários")
});
userRoutes.get("/users/:id", (req, res) => {
    res.status(200).send("Listando um usuários")
});
userRoutes.post("/users", (req, res) => {
    res.status(201).send("Inserindo um usuário")
});
userRoutes.put("/users/:id", (req, res) => {
    res.status(200).send("Editando um usuários")
});
userRoutes.delete("/users/:id", (req, res) => {
    res.status(200).send("Excluindo um usuários")
});

export default userRoutes;