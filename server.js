// JavaScript source code
import express from "express"
import cors from "cors"
//import dotenv from "dotenv"

//dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())

app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

console.log()

app.listen(3000, () => {
    console.log("Listening to port 3001")
})
