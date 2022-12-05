import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
