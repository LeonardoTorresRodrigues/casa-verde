import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--ff-text);
  }

  main {
    max-width: 1200px;
    margin: auto;
  }

  @media(min-width: 920px) {
    body {
      background-image: url('/images/body-shape.svg');
      background-repeat: no-repeat, repeat-x;
      background-position: right top;
    }
  }
`;