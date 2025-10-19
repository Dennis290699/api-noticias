import News from "../models/News.js";

export async function listNews({ page = 1, limit = 10, categoria, search } = {}) {
  const skip = (page - 1) * limit;
  const filter = {};

  if (categoria) filter.categoria = categoria;
  if (search) filter.$text = { $search: search }; // opcional si definieras text index

  const [items, total] = await Promise.all([
    News.find(filter).sort({ publishedAt: -1 }).skip(skip).limit(Number(limit)),
    News.countDocuments(filter)
  ]);

  return { items, meta: { page: Number(page), limit: Number(limit), total } };
}

export async function getNewsById(id) {
  return News.findById(id);
}

export async function createNews(data) {
  const news = new News(data);
  return news.save();
}

export async function updateNews(id, data) {
  return News.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteNews(id) {
  return News.findByIdAndDelete(id);
}
