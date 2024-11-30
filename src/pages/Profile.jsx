import { useNavigate } from "react-router-dom";

const Profile = () => {
  const email = "usuario@example.com"; 
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Sesión cerrada");
    navigate("/login"); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Perfil del Usuario</h1>
      <p style={styles.email}>
        <strong>Email:</strong> {email}
      </p>
      <button style={styles.button} onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "50%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    color: "#333",
  },
  email: {
    fontSize: "18px",
    color: "#555",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#FF6347", // Color rojo tomate
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;