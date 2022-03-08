import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import Login from './AuthPage/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
