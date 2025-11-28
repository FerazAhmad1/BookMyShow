import express from "express"
import { createUser, loginHandler } from "../controllers/user"
const router = express.Router()
router.post("/login", loginHandler)
router.post("/signup", createUser)
router.route("/").post(createUser)
export default router