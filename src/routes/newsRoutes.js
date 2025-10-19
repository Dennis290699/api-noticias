import { Router } from "express";
import * as newsCtrl from "../controllers/newsController.js";

const router = Router();

router.get("/", newsCtrl.list);           // GET /api/noticias
router.post("/", newsCtrl.create);        // POST /api/noticias
router.get("/:id", newsCtrl.getById);    // GET /api/noticias/:id
router.put("/:id", newsCtrl.update);     // PUT /api/noticias/:id
router.delete("/:id", newsCtrl.remove);  // DELETE /api/noticias/:id

export default router;
