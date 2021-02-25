import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      description
      status
    }
  }
`;

const ProductsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  h2 {
    color: #0d9488;
    font-size: 1.6rem;
    font-family: 'PatrickHand';
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsStyles>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsStyles>
  );
}
