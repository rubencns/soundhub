import styled from 'styled-components';
import { theme } from '../../assets/colors/theme';

export default styled.div`
  .list-title {
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;

    .list-results {
      margin-left: 5px;
    }
  }

  .list-button {
    border: 1px solid ${theme.neutrals.black};
    border-radius: 2px;
    align-self: center;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${theme.neutrals.white};
      background: ${theme.neutrals.black};
    }
  }

  .list-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    margin-bottom: 15px;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    .list-item {
      position: relative;
      margin-right: 10px;
      padding: 10px 0;
      cursor: pointer;

      &__cover {
        transition: all 1s ease-out;
        box-shadow: 1px 1px 8px #ccc;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;
        width: 100px;
      }

      &__name {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 20px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 1;
        color: #fff;
      }

      &.playlist {
        .list-item__cover {
          filter: blur(0.5px) brightness(0.6);
        }
        .list-item__name {
          opacity: 1;
        }

        &:hover {
          .list-item__cover {
            filter: blur(0.5px) brightness(0.8);
          }
        }
      }

      &:hover {
        .list-item__cover {
          filter: blur(0.5px) brightness(0.6);
        }
        .list-item__name {
          opacity: 1;
        }
      }
    }
  }
`;
