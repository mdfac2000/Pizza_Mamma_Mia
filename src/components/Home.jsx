import Header from "./Header";
import CardPizza from "./CardPizza";
import { useState, useEffect } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <div className="loading"><p>Cargando pizzas...</p></div>; // Aquí podrías poner un spinner
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button> {/* Botón para reintentar */}
      </div>
    );
  }

  return (
    <div>
      <Header
        titulo="Pizzería Mamma Mia!"
        descripcion="¡Tenemos las mejores pizzas que podrás encontrar!"
      />
      <div className="content">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.nombre}
            price={pizza.precio}
            ingredients={pizza.ingredientes}
            img={pizza.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;