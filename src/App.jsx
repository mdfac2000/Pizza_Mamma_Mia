import "./App.css";
import Footer from "./components/Footer.jsx";
// import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import Register from "./components/Register.jsx";
// import Login from "./components/Login.jsx";
// import Cart from "./components/Cart.jsx";
import Pizza from "./components/Pizza.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register/> */}
      {/* <Login /> */}
      {/* <Cart/> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
