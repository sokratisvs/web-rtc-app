import express from 'express';
import { createServer } from "http";
import { Server, Socket } from 'socket.io';
import cors from 'cors';

import { roomHandler } from './room';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.get('/', (_req, res) => {
    res.send({ message: 'Hello World!!'});
});

io.on("connection", (socket: Socket) => {
    roomHandler(socket);
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

httpServer.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});
