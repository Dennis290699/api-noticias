import mongoose from "mongoose";

let isConnected = false;

export async function connectDB(uri) {
  if (!uri) throw new Error("MONGODB_URI no está definido");

  // Evitar reconexiones redundantes en entornos con reloads
  if (isConnected) {
    // console.log("Ya conectado a MongoDB");
    return mongoose.connection;
  }

  // Opciones recomendadas
  const opts = {
    maxPoolSize: 10,            // pool para rendimiento
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  await mongoose.connect(uri, opts);
  isConnected = true;
  console.log("Conectado a MongoDB");
  return mongoose.connection;
}
