import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import newsRoutes from "./routes/newsRoutes.js";
import config from "./config/index.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/api/noticias", newsRoutes);

// Root
app.get("/", (req, res) => res.json({ ok: true, service: "API Noticias" }));

// Conectar a DB al iniciar (Vercel serverless puede llamar esto por cold start).
connectDB(config.MONGODB_URI).catch(err => {
  console.error("Error conectando a MongoDB:", err);
});

export default app;
