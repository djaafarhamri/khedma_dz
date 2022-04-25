import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Navbar from './pages/Navbar';
import Profile from './pages/ProfilePage/Profile';
import Register from './pages/RegisterPage/Register';
import Landing from './landing-page/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/landing' element={<Landing/>}/>
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
