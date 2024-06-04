import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(companyRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001.");
})

