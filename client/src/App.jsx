import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Note from "./pages/Note";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (<div data-theme="lele">
    <Navbar user="Lele" />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>)
}

export default App