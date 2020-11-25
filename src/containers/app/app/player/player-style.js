import styled from 'styled-components';
import { theme } from '../../../../assets/colors/theme';

export const PlayerStyle = styled.div`
  height: 100%;

  .player-buttons {
    position: absolute;
    bottom: 88px;
    left: 0;
    height: 59px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    border-top: 1px solid ${theme.neutrals.neutrals10};

    .player-playlist-title {
      justify-self: flex-end;
      margin-left: auto;
    }

    .player-button {
      line-height: 0;
      cursor: pointer;
      outline: none;

      &.all {
        width: 22px;
        height: 22px;
      }

      &.close {
        width: 18px;
        height: 18px;
      }

      &.show {
        width: 32px;
        height: 32px;
      }

      svg {
        path {
          transition: fill 0.3s ease-in-out;
        }
      }

      &:hover {
        svg {
          path {
            fill: ${theme.neutrals.neutrals50};
          }
        }
      }
    }
  }

  .audio-player {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .player-track {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    &.hide {
      display: none;
    }

    &-cover {
      width: 200px;
      border-radius: 10px;
      margin-bottom: 30px;
    }

    &-title {
      margin-bottom: 5px;
      text-align: center;
    }

    &-album {
      margin-bottom: 10px;
      text-align: center;
    }

    &-artist {
      text-align: center;
    }
  }

  .player-list {
    overflow-y: auto;
    width: 100%;
    padding: 0 15px;
    height: calc(100vh - 280px);

    &.hide {
      display: none;
    }

    &-track {
      padding: 10px 20px;
      cursor: pointer;
      display: flex;
      border-bottom: 1px solid ${theme.neutrals.neutrals30};
      padding: 16px;

      &:hover {
        background: #ddd;
      }

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;

        svg {
          width: 18px;
        }
      }

      &-info {
        &__item {
          display: flex;
          flex-direction: column;

          &:first-child {
            margin-bottom: 5px;
          }

          span:nth-child(2) {
            @media (max-width: 768px) {
              display: none;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1020px) {
    .audio-player {
      position: fixed;
    }

    .player-list {
      height: calc(100vh - 220px);
    }

    .player-track {
      &-cover {
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 425px) {
    .player-list {
      padding: 0;
    }
  }

  @media (max-width: 320px) {
    .player-track {
      margin-top: 0;

      &-cover {
        margin-bottom: 20px;
      }
    }
  }
`;
