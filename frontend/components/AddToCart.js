import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY, useUser } from './User';
import { useCart } from '../lib/cartState';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $size: String!, $price: Int!) {
    addToCart(productId: $id, size: $size, price: $price) {
      id
      price
    }
  }
`;

const AddToCartStyles = styled.button`
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: #ecfeff;
  border: 0;
  border-top: 1px solid #e5e7eb;
  color: #0891b2;
  text-transform: uppercase;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: #06b6d4;
    color: #fff;
  }
`;

export default function AddToCart({ id, size, price }) {
  const user = useUser();
  const { cartOpen, openCart } = useCart();
  const router = useRouter();

  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id, size, price },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleClick(e) {
    await addToCart();
    openCart();
  }

  function signInRedirect() {
    router.push('/signin');
  }

  return (
    <>
      {user && (
        <AddToCartStyles disabled={loading} onClick={handleClick}>
          Add{loading && 'ing'} To Cart
        </AddToCartStyles>
      )}
      {!user && (
        <AddToCartStyles onClick={signInRedirect}>Add to Cart</AddToCartStyles>
      )}
    </>
  );
}
