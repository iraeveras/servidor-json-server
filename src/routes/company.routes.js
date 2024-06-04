import { Router } from "express";
import companyController from "../controllers/company.controller.js";

const companyRoutes = Router();

companyRoutes.get("/company", companyController.Listar);
companyRoutes.get("/company/:id", companyController.ListarUmEmpresa);
companyRoutes.post("/company", companyController.Inserir);
companyRoutes.put("/company/:id", companyController.Editar);
companyRoutes.delete("/company/:id", companyController.Excluir);

export default companyRoutes;