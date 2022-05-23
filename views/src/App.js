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
import Professionals from './pages/AdminPage/Professionals';
import Service from "./pages/ServicePage/Service";
import { useEffect, useState } from "react";
import AdminNav from "./pages/AdminPage/AdminNav";
import Clients from "./pages/AdminPage/Clients";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsAdmin(
      location.pathname.toLocaleLowerCase().substring(0, 6) === "/admin" 
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
        <Route exact path="/admin/professionals" element={
        <div className="flex">
          <AdminNav />
          <Professionals />
        </div>
        } />
        <Route exact path="/admin/clients" element={
          <div className="flex">
          <AdminNav />
          <Clients />
        </div>
        } />
        <Route exact path="/admin/transactions" element={
        <div className="flex">
          <AdminNav />
          <Professionals />
        </div>
        } />
        {/* 404 */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
      {!isAdmin && <Footer/>}
    </div>
  );
}

export default App;
