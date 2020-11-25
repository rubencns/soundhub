import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  border-radius: 3px;

  &:active {
    border: 1px solid ${theme.neutrals.neutrals80};
  }

  &.focus {
    border: 1px solid ${theme.neutrals.neutrals80};
  }

  .input-body {
    width: 100%;
    font-size: 14px;
    border: none;
  }

  .input-icon {
    height: 16px;
    width: 16px;
    line-height: 0;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${theme.neutrals.neutrals30};
    }

    &.left {
      margin-left: 10px;
    }

    &.right {
      margin-right: 10px;
    }
  }

  &.home {
    border: 1px solid ${theme.neutrals.neutrals30};
    border-radius: 5px;
    .input-body {
      height: 50px;
      font-size: 20px;
    }

    .input-icon {
      height: 24px;
      width: 24px;
      margin: 0 10px;
    }
  }
  .right-icon {
  }
`;
