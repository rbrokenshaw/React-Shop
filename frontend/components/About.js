import styled from 'styled-components';

const AboutStyles = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
  background-color: #fff;
  h2 {
    color: #0891b2;
    font-family: 'PatrickHand';
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0rem 0rem 2rem 0rem;
  }
  img {
    width: 50%;
    min-width: 300px;
    float: left;
    border-radius: 1rem;
    margin-right: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    img {
      min-width: 100%;
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <h2>About the Artist</h2>

      <img src="/static/images/lady-with-camera.jpg" alt="The Artist" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
        arcu ut felis pulvinar facilisis ut nec risus. Sed condimentum mollis
        feugiat. Integer iaculis commodo justo, sed gravida purus laoreet sit
        amet. Nullam in mollis ante. Integer sed nunc vel odio egestas egestas.
      </p>
      <p>
        Donec nec libero tincidunt, facilisis eros ac, tincidunt dui. Curabitur
        aliquet mattis eleifend. Aliquam erat volutpat. Maecenas tincidunt lorem
        lectus, nec condimentum turpis pulvinar non. Curabitur rutrum at ex non
        maximus.
      </p>

      <p>
        Donec nec arcu sem. Nullam lacus sem, luctus ut malesuada a, bibendum ac
        leo. Donec auctor ex odio, in venenatis felis dignissim eget. Nulla
        scelerisque ipsum ultrices lobortis ultrices. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec a venenatis nisl.
      </p>
      <p>
        Phasellus fermentum egestas porttitor. In vel augue iaculis neque
        eleifend sollicitudin a in enim. Vivamus placerat dictum porta. Fusce a
        lectus iaculis, vehicula velit sed, lacinia mauris. Donec facilisis nisl
        a fringilla posuere. Phasellus lobortis turpis nec libero aliquet, ac
        viverra nisi ultricies. Phasellus molestie ligula sed neque accumsan
        lobortis. Nam quis elit ac tellus consectetur accumsan. Ut at lorem
        tincidunt, dapibus mauris ac, consequat dui.
      </p>
    </AboutStyles>
  );
}
