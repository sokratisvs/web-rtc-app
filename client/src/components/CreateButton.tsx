import React from 'react'
import { useRoomContext } from '../context/RoomContext';

export const CreateButton: React.FC = () => {
    const { createRoom } = useRoomContext();
    return ( 
        <button
            onClick={createRoom}
            className="bg-sky-500 hover:bg-sky-500/75 py-2 px-8 rounded-lg text-xl text-white">
                Start New Meeting
        </button>
    );
}

