import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "../src/utils/db.js";
import News from "../src/models/News.js";

const sample = [
  { titulo: "IA transforma educación 2025", categoria: "Tecnología", resumen: "Resumen 1" },
  { titulo: "Descubrimiento en la Amazonía", categoria: "Ciencia", resumen: "Resumen 2" },
  { titulo: "Mercados muestran recuperación", categoria: "Economía", resumen: "Resumen 3" }
];

async function run() {
  try {
    await connectDB(process.env.MONGODB_URI);
    await News.deleteMany({});
    await News.insertMany(sample);
    console.log("Seed completado");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
