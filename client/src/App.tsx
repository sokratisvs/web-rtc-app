import socketIO from 'socket.io-client';
import { useEffect } from 'react';

const ws = 'http://localhost:8080';

function App() {

  useEffect(() => {
    socketIO(ws);
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <button className="bg-sky-500 hover:bg-sky-500/75 py-2 px-8 rounded-lg text-xl text-white">Start New Meeting</button>
    </div>
  );
}

export default App;
