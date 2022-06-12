import React from 'react'
import { CreateButton } from "../components/CreateButton";

export const Home: React.FC = () => {
    return ( 
        <div className="flex justify-center items-center w-screen h-screen">
            <CreateButton/>
        </div>
    );
}