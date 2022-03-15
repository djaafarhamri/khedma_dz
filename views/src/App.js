import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import Login from './AuthPage/Login';
import Landing from './landing-page/Landing';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path='/landing' element={<Landing/>}/>  
      </Routes>
    </div>
  );
}

export default App;
