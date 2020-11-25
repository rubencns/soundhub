import styled from 'styled-components';

const HomeStyle = styled.div`
  .home-search {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .track-grid {
  }

  .player {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 1;

    .button-player {
      cursor: pointer;
    }

    .player-list {
      background: #ddd;
      height: 340px;
      width: 100%;
      position: absolute;
      bottom: 50px;
      left: 0;
      overflow-y: auto;

      &__item {
        padding: 20px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;

        &:hover {
          background: #eee;
        }
      }
    }

    audio {
      width: 90%;
      border-radius: 0;
    }

    @media (min-width: 425px) {
      width: 500px;
    }
  }

  .player-track {
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    /* z-index: 5; */

    audio {
      width: 50%;
    }
  }
`;

export default HomeStyle;
