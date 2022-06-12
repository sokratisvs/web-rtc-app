import React, { createContext, useContext, useEffect } from 'react';
import socketIO from 'socket.io-client';

const JOIN_ROOM = 'join-room';
const CREATE_ROOM = 'create-room';
const ROOM_CREATED = 'room-created';
const wsUri = 'http://localhost:8080';

const RoomContext = createContext<null | any>(null);

const ws = socketIO(wsUri);

export const useRoomContext = () => {
    return useContext(RoomContext)
}

export const RoomProvider: React.FC<Props> = ({ children }) => {
    const enterRoom = ({ roomId } : { roomId: string}) => {
        console.log('client room----', roomId);
    }

    useEffect( () => {
        ws.on(ROOM_CREATED, enterRoom)
    }, []);
    
    const joinRoom = () => {
        return ws.emit(JOIN_ROOM);
    }

    const createRoom = () => {
        return ws.emit(CREATE_ROOM);
    }

    const data = {
        ws,
        joinRoom,
        createRoom
    }

    return <RoomContext.Provider value={data}>{children}</RoomContext.Provider>;
}

export default RoomContext;

type Props = {
    children?: React.ReactNode
};