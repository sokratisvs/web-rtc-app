import { Route, Routes } from 'react-router-dom';
import { RoomProvider } from './context/RoomContext';

import { Home } from './pages/Home';
import { Room } from './pages/Room';

function App() {
  return (
      <RoomProvider>
        <Routes>
           <Route path="/room/:roomId" element={<Room />} />
           <Route path="/" element={<Home />} />
        </Routes>
      </RoomProvider>
  );
}

export default App;
