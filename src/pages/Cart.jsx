import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importar el contexto

const Cart = () => {
  // Consumimos el contexto
  const { cart, addToCart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
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
                <Button
                  variant="outline-danger"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </Button>
                <span className="mx-3">{pizza.quantity}</span>
                <Button
                  variant="outline-primary"
                  onClick={() => addToCart(pizza)}
                >
                  +
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
      <h3>Total: ${getTotalPrice().toLocaleString()}</h3>
      <Button variant="success">Pagar</Button>
    </div>
  );
};

export default Cart;
