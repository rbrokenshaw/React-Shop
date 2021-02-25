import styled from 'styled-components';
import { useCart } from '../lib/cartState';

const Dot = styled.div`
  background-color: #0e7490;
  color: white;
  border-radius: 50%;
  display: inline-block;
  margin-left: 0.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
  line-height: 0.7rem;
  min-width: 0.7rem;
  cursor: pointer;
`;

export default function CartCount({ count }) {
  const { openCart } = useCart();
  return <Dot onClick={openCart}>{count}</Dot>;
}
