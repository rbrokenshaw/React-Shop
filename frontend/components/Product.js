import { useState } from 'react';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import useForm from '../lib/useForm';
import AddToCart from './AddToCart';

const ProductStyles = styled.div`
  padding: 1rem 2rem;
  background-color: #fff;
  margin: 1rem;
  border: 1px solid #e5e7eb;
  position: relative;
  .price {
    color: #6b7280;
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  select {
    display: block;
    padding: 0.5rem 0.5rem;
    margin-top: 0.5rem;
  }
`;

export default function Product({ product }) {
  const [itemPrice, setItemPrice] = useState(1000);
  const { inputs, handleChange } = useForm({
    size: '7x5',
  });

  const updatePrice = (size) => {
    const prices = {
      size7x5: 1000,
      size10x8: 2000,
    };

    if (itemPrice !== prices[size]) {
      setItemPrice(prices[size]);
    }
    console.log(inputs.size);
  };

  return (
    <ProductStyles>
      <h2>{product.name}</h2>
      <img
        src={product.photo.image.publicUrlTransformed}
        alt={product.altText}
      />
      <p>{product.description}</p>

      <form>
        <label htmlFor="size">
          Choose a Size:
          <select
            name="size"
            value={inputs.size}
            onChange={handleChange}
            onInput={updatePrice(`size${inputs.size}`)}
          >
            <option value="7x5">7x5</option>
            <option value="10x8">10x8</option>
          </select>
        </label>
      </form>

      <p className="price">{formatMoney(itemPrice)}</p>

      <AddToCart id={product.id} size={inputs.size} price={itemPrice} />
    </ProductStyles>
  );
}
