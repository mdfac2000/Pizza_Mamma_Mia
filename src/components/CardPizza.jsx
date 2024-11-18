import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '25rem', margin: '1rem' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>Precio: ${price}</strong>
        </Card.Text>
        <Button variant="primary">Añadir al carrito 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
