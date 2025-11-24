import "./env.ts"
import app from "./app"
import mongoose from "mongoose"
import fs from "fs"

let connectingString = process.env.connectionString || ""

connectingString = connectingString?.replace("<db_password>", process.env?.DB_PASSWORD || "")

mongoose.connect(connectingString).then((connection) => {

}).catch((err) => {
    console.log(err)
})

    ;
fs.readFile(`${__dirname}/test.text`, "utf-8", (err, data) => {
    console.log(err, data)
})
app.listen(3000, () => {
    console.log("data")
})
