import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/AuthPage/Login';
import Register from './pages/AuthPage/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
