import styled from 'styled-components';
import { theme } from '../../../../assets/colors/theme';

export const LoginStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    label {
      width: 100%;
      margin-bottom: 15px;

      input {
        width: 100%;
        padding: 10px;
      }
    }

    input {
      background: none;
      border: 1px solid ${theme.neutrals.black};
      border-radius: 3px;
    }

    .button {
      width: 100%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      padding: 10px;
      margin-bottom: 10px;
      background: ${theme.neutrals.black};
      color: ${theme.neutrals.white};

      &:hover {
        background: ${theme.neutrals.white};
        color: ${theme.neutrals.black};
      }
    }

    .link {
      margin: auto;
      cursor: pointer;
    }
  }
`;
