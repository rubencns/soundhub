import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';

export const ModalAddTrackStyle = styled.div`
  height: calc(100% - 53px);
  overflow-y: auto;

  .modal-add-track-item {
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: ${theme.neutrals.neutrals50};
      color: ${theme.neutrals.white};
    }
  }
`;
