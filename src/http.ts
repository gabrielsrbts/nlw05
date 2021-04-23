import express, { request } from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import path from "path"

import "./database"
import { routes } from "./routes"

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
})

const http = createServer(app) // Criando protocolo HTTP
const io = new Server(http) // Criando protocolo WEBSOCKET

io.on("connection", (socket: Socket) => {
    //console.log(`Se conectou, ID: ${socket.id}`)
})

app.use(express.json()) // definindo que o estamos usando o JSON com o express

app.use(routes)

export { http, io }