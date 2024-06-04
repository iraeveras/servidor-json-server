import { Router } from "express";

const companyRoutes = Router();

companyRoutes.get("/company", (req, res) => {
    res.status(200).send("Listando empresas")
});
companyRoutes.get("/company/:id", (req, res) => {
    res.status(200).send("Listando uma empresa")
});
companyRoutes.post("/company", (req, res) => {
    res.status(201).send("Inserindo uma empresa")
});
companyRoutes.put("/company/:id", (req, res) => {
    res.status(200).send("Editando uma empresa")
});
companyRoutes.delete("/company/:id", (req, res) => {
    res.status(200).send("Excluindo uma empresa")
});

export default companyRoutes;