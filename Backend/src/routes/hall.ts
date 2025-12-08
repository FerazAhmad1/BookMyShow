import express from "express";
import { createHall, getHallForTheater, updateHall, deleteHall, getOneHall } from "../controllers/hall"
const router = express.Router();
router.route("/").get(createHall).post(getHallForTheater);
router.route("/:id").get(getOneHall).patch(updateHall).delete(deleteHall)
export default router