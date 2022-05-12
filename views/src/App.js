import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Nav from './pages/nav/Nav';
import Profile from './pages/ProfilePage/Profile';
import Register from './pages/RegisterPage/Register';
import Landing from './pages/landing-page/Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path="/profile/:_id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
