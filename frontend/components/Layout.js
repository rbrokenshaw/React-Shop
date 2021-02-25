import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "PatrickHand";
    src: url("/static/fonts/patrick_hand/PatrickHand-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/static/fonts/roboto/Roboto-Light.ttf");
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/static/fonts/roboto/Roboto-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/static/fonts/roboto/Roboto-Medium.ttf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  body {
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #164E63;
  }

  a {
    color: #F97316;
    text-decoration: none;
    font-weight: 500;
  }
  a:hover {
    color: #EA580C;
    text-decoration: underline;
  }
`;

const InnerStyles = styled.div`
  padding: 3rem;
  margin: 0;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.8' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </>
  );
}
