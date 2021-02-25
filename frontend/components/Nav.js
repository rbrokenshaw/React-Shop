import Link from 'next/link';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import { useUser } from './User';

const NavStyles = styled.div`
  margin-top: 2rem;
  a,
  p {
    display: inline;
    padding: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #164e63;
  }
  a:hover,
  p:hover {
    font-weight: 500;
    border-bottom: 3px solid #e5e7eb;
    text-decoration: none;
    color: #ea580c;
  }
  p {
    cursor: pointer;
    font-weight: 500;
  }
`;

export default function Nav() {
  const user = useUser();
  const { toggleCart } = useCart();

  return (
    <NavStyles>
      <Link href="/about">About</Link>
      <Link href="/">Shop</Link>
      {user && <p onClick={toggleCart}>Cart</p>}
      {user && (
        <CartCount
          count={user.cart.reduce(
            (tally, cartItem) => tally + cartItem.quantity,
            0
          )}
        />
      )}
    </NavStyles>
  );
}
