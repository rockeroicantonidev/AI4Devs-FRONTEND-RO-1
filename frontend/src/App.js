import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import RecruiterDashboard from './components/RecruiterDashboard';
import AddCandidate from './components/AddCandidateForm'; 
import Positions from './components/Positions'; 
import PositionBoard from './components/PositionBoard';

// Wrapper para obtener el id de la URL y pasarlo como prop
function PositionBoardWrapper() {
  const { id } = useParams();
  return <PositionBoard positionId={id} />;
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecruiterDashboard />} />
        <Route path="/add-candidate" element={<AddCandidate />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/position/:id" element={<PositionBoardWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;