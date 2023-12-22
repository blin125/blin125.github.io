import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Homepage";

import './styles/NavbarStyle.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/bruno-website"/>} />
        <Route path="/bruno-website" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
