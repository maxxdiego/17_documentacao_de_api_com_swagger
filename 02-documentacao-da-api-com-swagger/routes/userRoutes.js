import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

// Endpoint para cadastrar um Usuário
userRoutes.post("/user", userController.createUser);

// Endpoint para autenticação de usuários
userRoutes.post("/auth", userController.loginUser);

export default userRoutes;
