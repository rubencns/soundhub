import styled from 'styled-components';

export const AppStyle = styled.div`
  .app-logo {
    display: none;

    @media (min-width: 1024px) {
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 30px;

      img {
        max-width: 150px;
      }
    }

    .app-logo-container {
      display: flex;

      img {
        margin-right: 10px;
      }
    }
  }

  button {
    cursor: pointer;
  }

  a {
    color: #000;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ccc;
    }
  }
`;
