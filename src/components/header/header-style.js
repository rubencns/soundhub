import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';

export const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${theme.neutrals.neutrals30};
  width: 100%;

  .header-item {
    justify-self: center;
    align-self: center;
    cursor: pointer;
    line-height: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;

    &-icon {
      width: 22px;
    }

    &.active {
      color: ${theme.neutrals.neutrals50};
    }

    &:hover {
      color: ${theme.neutrals.neutrals50};
  }
`;
