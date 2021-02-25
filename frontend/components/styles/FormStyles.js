import styled from 'styled-components';

const FormStyles = styled.form`
  text-align: center;
  margin: 0 auto;
  max-width: 500px;
  background-color: #fff;
  padding: 2rem;
  h2 {
    font-size: 1.7rem;
    font-weight: 500;
    font-family: 'PatrickHand';
    color: #0891b2;
  }
  p {
    margin-top: 3rem;
  }
  fieldset {
    border: 0;
  }
  label {
    font-weight: 500;
    display: block;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  input {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    border: 1px solid #9ca3af;
    border-radius: 0.3rem;
  }
  button {
    padding: 0.7rem 1rem;
    background-color: #0891b2;
    color: #fff;
    border: 0;
    border-radius: 0.3rem;
    font-weight: 500;
  }
`;

export default FormStyles;
