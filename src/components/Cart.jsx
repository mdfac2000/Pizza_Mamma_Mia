import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pizzaCart } from './pizzas'; // Importa el array de pizzaCart
import { useState } from 'react';

const Cart = () => {
  // Utiliza el array importado como estado inicial
  const [cart, setCart] = useState(pizzaCart);

  // Función para incrementar la cantidad
  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad
  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      {cart.map((pizza) => (
        <Card key={pizza.id} className="mb-3">
          <Card.Body className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
              <div className="ms-3">
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>${pizza.price.toLocaleString()}</Card.Text>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Button variant="outline-danger" onClick={() => handleDecrease(pizza.id)}>
                -
              </Button>
              <span className="mx-3">{pizza.count}</span>
              <Button variant="outline-primary" onClick={() => handleIncrease(pizza.id)}>
                +
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
      <Button variant="success">Pagar</Button>
    </div>
  );
};

export default Cart;