import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/users", userController.Listar);
userRoutes.get("/users/:id", userController.ListarUmUsuario);
userRoutes.post("/users", userController.Inserir);
userRoutes.put("/users/:id", userController.Editar);
userRoutes.delete("/users/:id", userController.Excluir);

export default userRoutes;