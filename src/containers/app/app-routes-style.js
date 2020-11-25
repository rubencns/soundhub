import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';

export const AppRoutesStyle = styled.div`
  height: 100vh;
  position: relative;
  margin: auto;
  box-shadow: 0 0 10px ${theme.neutrals.neutrals30};
  overflow-y: scroll;

  @media (min-width: 1024px) {
    width: 768px;
    height: calc(100vh - 60px);
    margin-top: 60px;
    border-radius: 10px;
  }

  .app-routes-container {
    padding: 20px;

    @media (min-width: 1024px) {
      height: calc(100vh - 137px);
    }
  }
`;
