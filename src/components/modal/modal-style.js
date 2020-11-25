import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';
import { Heading2, Heading3 } from '../../typography/typography';

export const ModalStyle = styled.div`
  position: absolute;
  top: 59px;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${theme.neutrals.white};
  z-index: 1;
  display: none;
  padding: 24px;

  &.active {
    display: block;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &-title {
      ${Heading2};
    }

    &-close {
      width: 15px;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    .modal-header {
      &-title {
        ${Heading3};
      }
    }
  }
`;
