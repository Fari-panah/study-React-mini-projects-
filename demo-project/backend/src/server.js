import express from "express"
import cors from "cors"
import notesRouter from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001
connectDB()

//middleware
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(express.json()) // this middleware will parse JSON bodies:req.body
app.use(rateLimiter)




app.use("/api/notes", notesRouter)


app.listen(PORT, () => {console.log("Server started on PORT:", PORT);
})

//mongodb+srv://farnazj_db_user:<db_password>@cluster0.t9vtqbt.mongodb.net/?appName=Cluster0


