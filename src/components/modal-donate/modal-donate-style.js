import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';
import { BodyDefault } from '../../typography/typography';

export default styled.div`
  ${BodyDefault};
  margin: 0 24px;

  .card {
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;

    input {
      ${BodyDefault};
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid ${theme.neutrals.neutrals50};
      border-radius: 3px;
    }

    .input-group {
      display: grid;
      grid-template-columns: 50% 50%;

      input {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }

  .modal-button {
    ${BodyDefault};
    weight: 600;
    color: ${theme.neutrals.white};
    text-transform: uppercase;
    background: rgb(21, 127, 251);
    padding: 15px;
    border-radius: 3px;
    width: 100%;
    cursor: pointer;
  }
`;
