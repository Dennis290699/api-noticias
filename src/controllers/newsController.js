import * as newsService from "../services/newsService.js";

export async function list(req, res, next) {
  try {
    const { page, limit, categoria, search } = req.query;
    const result = await newsService.listNews({ page, limit, categoria, search });
    res.json(result);
  } catch (err) { next(err); }
}

export async function getById(req, res, next) {
  try {
    const item = await newsService.getNewsById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) { next(err); }
}

export async function create(req, res, next) {
  try {
    const created = await newsService.createNews(req.body);
    res.status(201).json(created);
  } catch (err) { next(err); }
}

export async function update(req, res, next) {
  try {
    const updated = await newsService.updateNews(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) { next(err); }
}

export async function remove(req, res, next) {
  try {
    const deleted = await newsService.deleteNews(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) { next(err); }
}
