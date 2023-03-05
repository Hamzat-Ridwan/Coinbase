import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/settings' /> } />
        <Route path='/settings' element={<Settings />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
