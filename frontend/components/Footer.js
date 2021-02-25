import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #f9fafb;
  margin: 0;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Just a demo site!</p>
    </StyledFooter>
  );
}
