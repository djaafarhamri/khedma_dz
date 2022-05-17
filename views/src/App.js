import "./App.css"
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Nav from './pages/nav/Nav';
import Profile from './pages/ProfilePage/Profile';
import Register from './pages/RegisterPage/Register';
import Landing from './pages/landing-page/Landing';
import Footer from "./pages/Footer";
import Chat from './pages/ChatPage/Chat';
import Admin from './pages/AdminPage/Admin';
import Service from "./pages/ServicePage/Service";
import { useEffect, useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsAdmin(
      location.pathname.toLocaleLowerCase() === "/admin" 
    );
  }, [location]);
  return (
    <div className="App " >
      {!isAdmin && <Nav />}
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path="/profile/:_id" element={<Profile />} />
        <Route exact path="/service/:_id" element={<Service />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      {!isAdmin && <Footer/>}
    </div>
  );
}

export default App;
