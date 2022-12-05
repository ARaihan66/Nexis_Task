import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

    </div>
  );
}

export default App;
