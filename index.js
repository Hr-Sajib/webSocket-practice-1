const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Socket.io 

io.on("connection", (socket)=> {
    // console.log("A new user/socket has connected..", socket.id)
    socket.on('user-message', (message) => {
        // console.log("A new user message: ", message)
        io.emit('message', message)
    })


})





app.use(express.static(path.resolve('./public')))


app.get("/",(req, res)=>{
    res.sendFile('./public/index.html')  
})

server.listen(5100, ()=> {
    console.log("ChatApp ws server listenning to port 5100..")
})

