import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';

export const ModalUpdateUserStyle = styled.div`
  .modal-form {
    display: flex;
    flex-direction: column;

    &-item {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
      }

      button {
        padding: 10px;
        width: 100px;
        margin-right: 10px;
        border: 1px solid ${theme.neutrals.black};
        border-radius: 3px;
        color: ${theme.neutrals.white};
        background: ${theme.neutrals.black};
        transition: all 0.3s ease-in-out;

        &:hover {
          background: ${theme.neutrals.white};
          color: ${theme.neutrals.black};
        }
      }

      &.buttons {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;
