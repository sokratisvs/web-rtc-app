import React, { createContext } from 'react';
import socketIO from 'socket.io-client';

const wsUri = 'http://localhost:8080';

const RoomContext = createContext<null | any>(null);

const ws = socketIO(wsUri);

export const RoomProvider: React.FC<Props> = ({ children }) => {
    return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
}

export default RoomContext;

type Props = {
    children?: React.ReactNode
};