import "./App.css";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register/> */}
      {/* <Login /> */}
      <Cart/>
      <Footer />
    </>
  );
}

export default App;
