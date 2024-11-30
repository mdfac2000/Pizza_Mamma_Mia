import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
   <BrowserRouter>
      <Navbar />     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>      
      <Footer />
   </BrowserRouter>
    
  );
}

export default App;
