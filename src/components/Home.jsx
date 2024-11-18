import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./pizzas";

const Home = () => {
  return (
    <>
      <Header
        titulo="¡Pizzería Mamma Mia!"
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
    </>
  );
};

export default Home;
