import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Ingredientes:</strong> <br />
            <span role="img" aria-label="pizza">
              🍕
            </span>{" "}
            {ingredients}
          </Card.Text>
          <Card.Text>
            <strong>Precio: ${price}</strong>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="outline-primary">
              Ver Más{" "}
              <span role="img" aria-label="eyes">
                👀
              </span>
            </Button>
            <Button variant="primary">
              Añadir{" "}
              <span role="img" aria-label="cart">
                🛒
              </span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;
