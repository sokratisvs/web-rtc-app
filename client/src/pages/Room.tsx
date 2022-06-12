import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useRoomContext } from '../context/RoomContext';
import { constants } from '../constants';

export const Room: React.FC = () => {
    const { roomId } = useParams();
    const { ws } = useRoomContext();

    useEffect(() => {
        ws.emit(constants.JOIN_ROOM, { roomId });
    }, [ws, roomId])

    return ( 
        <div>
            Room: {roomId}
        </div>
    );
}