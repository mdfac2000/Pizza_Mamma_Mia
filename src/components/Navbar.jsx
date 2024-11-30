import { Link } from "react-router-dom"
// import Boton from "./Boton"

const Navbar = () => {
  return (
    <div style={styles.navbar}>
    <h4 style={styles.brand}>Pizzería MammaMía!</h4>
    <div style={styles.links}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <Link to="/profile" style={styles.link}>
        Profile
      </Link>
      <Link to="/login" style={styles.link}>
        Login
      </Link>
      <Link to="/register" style={styles.link}>
        Register
      </Link>
      <Link to="/cart" style={styles.cartButton}>
        🛒 Total: $123.45
      </Link>
    </div>
  </div>
);
};

const styles = {
navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#000000", 
  color: "#fff",
},
brand: {
  fontSize: "24px",
  fontWeight: "bold",
},
links: {
  display: "flex",
  gap: "15px",
},
link: {
  color: "#fff",
  textDecoration: "none",
  fontSize: "18px",
},
cartButton: {
  color: "#fff",
  backgroundColor: "#007BFF", 
  padding: "8px 15px",
  borderRadius: "5px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
},
};

export default Navbar;