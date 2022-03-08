import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import AuthPage from './AuthPage/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
