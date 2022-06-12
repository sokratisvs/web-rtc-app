import { Socket } from 'socket.io';
import { v4 as uuidV4 } from 'uuid';

const JOIN_ROOM = 'join-room';
const CREATE_ROOM = 'create-room';
const ROOM_CREATED = 'room-created';

export const roomHandler = (socket: Socket) => {
    socket.on(JOIN_ROOM, () => {
        // socket.join("room");
        // io.to("room").emit("user joined room");
    });

    socket.on(CREATE_ROOM, () => {
        const roomId = uuidV4();
        console.log(`room ${roomId} created!`);
        socket.join(roomId);
        socket.emit(ROOM_CREATED, { roomId });
    });
}