
import express from "express";
import { listTheater } from "../controllers/theater"
const router = express.Router();

router.route("/").get(listTheater).post();
router.route("/:id").get().patch().delete();
export default router