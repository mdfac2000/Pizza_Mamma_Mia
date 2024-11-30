import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        console.log("Iniciando petición para obtener la pizza...");
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!response.ok) {
          throw new Error("Error al obtener la información de la pizza");
        }
        const data = await response.json();
        console.log("Datos obtenidos de la API:", data);
        setPizza(data);
      } catch (err) {
        console.error("Error durante la petición:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return <p>Cargando información de la pizza...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pizza) {
    return <p>No se pudo cargar la información de la pizza.</p>;
  }

  return (
    <div className="pizza-detail">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p>
        <strong>Ingredientes:</strong>
        {pizza.ingredients && Array.isArray(pizza.ingredients)
          ? pizza.ingredients.join(", ")
          : "Información no disponible"}
      </p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <button className="add-to-cart-button" disabled>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;



