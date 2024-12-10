import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Signup from './components/Signup'
import Home from "./components/Home";
import Login from "./components/login";


function App() {
  return (
    <Router>  {/* Wrap everything inside Router */}
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  </Router>
  )
}

export default App
