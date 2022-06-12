import React from 'react'
import { useRoomContext } from '../context/RoomContext';
import { constants } from '../constants';

export const CreateButton: React.FC = () => {
    const { ws } = useRoomContext();

    const createRoom = () => {
        return ws.emit(constants.CREATE_ROOM);
    }
    return ( 
        <button
            onClick={createRoom}
            className="bg-sky-500 hover:bg-sky-500/75 py-2 px-8 rounded-lg text-xl text-white">
                Start New Meeting
        </button>
    );
}

