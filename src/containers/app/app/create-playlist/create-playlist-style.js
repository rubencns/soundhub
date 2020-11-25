import styled from 'styled-components';
import { theme } from '../../../../assets/colors/theme';

export const CreatePlaylistStyle = styled.div`
  .create-playlist-title {
    margin-bottom: 12px;
  }

  .create-playlist-form {
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
        margin-right: 10px;
        background: ${theme.neutrals.black};
        color: ${theme.neutrals.white};
        border: 1px solid ${theme.neutrals.white};
        border-radius: 3px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: ${theme.neutrals.white};
          color: ${theme.neutrals.black};
          border: 1px solid ${theme.neutrals.black};
        }
      }

      &.buttons {
        display: flex;
        flex-direction: row;
      }
    }

    &-results {
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

      &-item {
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

        &:hover {
          .create-playlist-form-results-item__cover {
            filter: blur(0.5px) brightness(0.6);
          }
          .create-playlist-form-results-item__name {
            opacity: 1;
          }
        }
      }
    }
  }
`;
