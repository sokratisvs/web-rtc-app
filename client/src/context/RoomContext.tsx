import React, { createContext, useContext, useEffect } from 'react';
import socketIO from 'socket.io-client';
import { useNavigate } from "react-router-dom";
import { constants } from '../constants';

const RoomContext = createContext<null | any>(null);

const ws = socketIO(constants.WS_URI);

export const useRoomContext = () => {
    return useContext(RoomContext)
}

export const RoomProvider: React.FC<Props> = ({ children }) => {
    let navigate = useNavigate();
    const enterRoom = ({ roomId } : { roomId: string}) => {
        navigate(`/room/${roomId}`);
    }

    useEffect( () => {
        ws.on(constants.ROOM_CREATED, enterRoom);
    }, []);

    const data = {
        ws
    }

    return <RoomContext.Provider value={data}>{children}</RoomContext.Provider>;
}

export default RoomContext;

type Props = {
    children?: React.ReactNode
};