import styled from 'styled-components';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';

const CartItemStyles = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding-bottom: 2rem;
  margin-top: 2rem;
  border-bottom: 1px solid #e5e7eb;
  img {
    margin-right: 1rem;
    width: 100px;
  }
`;

const CartStyles = styled.div`
  text-align: left;
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 30%;
  min-width: 300px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  overflow-y: scroll;
  ${(props) => props.open && `transform: translateX(0);`};
  h2 {
    font-weight: 500;
    color: #0891b2;
    text-align: center;
    padding-bottom: 2rem;
  }
  .closeCart {
    margin-right: 0;
    background-color: #fff;
    border: 0;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .total {
    margin: 0rem 3rem 1rem 0rem;
    padding: 3rem;
    font-size: 2rem;
    font-weight: 500;
    text-align: right;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        src={product.photo.image.publicUrlTransformed}
        alt={product.photo.image.altText}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(cartItem.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.price)} each
          </em>
        </p>
      </div>
    </CartItemStyles>
  );
}

export default function Cart() {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();

  if (!user) return null;

  return (
    <CartStyles open={cartOpen}>
      <button className="closeCart" type="button" onClick={closeCart}>
        &times;
      </button>
      <h2>Shopping Cart</h2>

      {user.cart.length > 0 && (
        <>
          <ul>
            {user.cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>

          <p className="total">
            Total: {formatMoney(calcTotalPrice(user.cart))}
          </p>
        </>
      )}

      {!user.cart.length > 0 && <p>Cart empty.</p>}
    </CartStyles>
  );
}
