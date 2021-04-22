import express, { request } from "express"
import "./database"
import { routes } from "./routes"

const app = express()

app.use(express.json()) // definindo que o estamos usando o JSON com o express

app.use(routes)


app.listen(3333, () => console.log('Server is running on port 3333'))