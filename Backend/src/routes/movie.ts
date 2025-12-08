import express from "express"

const router = express.Router()

router.route("/").post().get()
router.route("/:id").get().patch().delete()
export default router