import Link from 'next/link';
import styled from 'styled-components';
import { websiteName } from '../config';
import Cart from './Cart';
import Nav from './Nav';
import SignInOut from './SignInOut';

const StyledWebsiteTitle = styled.a`
  font-family: 'PatrickHand';
  font-size: 32px;
  color: #0891b2;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #0891b2;
  }
`;

const HeaderStyles = styled.div`
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
  @media (max-width: 800px) {
    padding-top: 5rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/" passHref>
        <StyledWebsiteTitle>{websiteName}</StyledWebsiteTitle>
      </Link>
      <SignInOut />
      <Nav />
      <Cart />
    </HeaderStyles>
  );
}
