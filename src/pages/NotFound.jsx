import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.errorBox}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.subtitle}>¡Oops! Página no encontrada</p>
        <p style={styles.message}>
          Parece que te has perdido... Mejor volvamos al inicio.
        </p>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Volver al Inicio</button>
        </Link>
      </div>
      <img
        src="https://i.giphy.com/media/13UZisxBxkjPwI/giphy.webp" // GIF de Homero Simpson
        alt="Homero Simpson perdido"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
    padding: "20px",
  },
  errorBox: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  title: {
    fontSize: "96px",
    fontWeight: "bold",
    color: "#FF6347", // Color rojo tomate
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    margin: "10px 0",
  },
  message: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF", // Azul bootstrap
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  image: {
    width: "300px",
    height: "auto",
    marginTop: "20px",
  },
};

export default NotFound;

