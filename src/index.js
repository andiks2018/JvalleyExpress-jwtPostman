import express from "express"
import env from "dotenv"
import user_routes from "./routes/user_routes"
import notes_routes from "./routes/notes_routes"
env.config()

const app = express()

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(user_routes)
app.use(notes_routes) //tambahkan ini 

app.listen(8000, ()=>{
    console.info("server berjalan di port 8000")
})