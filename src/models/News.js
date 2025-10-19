import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  titulo: { type: String, required: true, index: true },
  resumen: { type: String },
  contenido: { type: String },
  categoria: { type: String, index: true },
  autor: { type: String },
  publishedAt: { type: Date, default: Date.now, index: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

// índices para consultas comunes
NewsSchema.index({ categoria: 1, publishedAt: -1 });

export default mongoose.models.News || mongoose.model("News", NewsSchema);
