import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));

  @media (min-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  }

  .track-grid-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column-reverse;
    cursor: pointer;
    padding: 5px;
    position: relative;

    &-cover {
      transition: all 1s ease-out;
      box-shadow: 1px 1px 8px #ccc;
      width: 100%;
      transition: all 0.3s ease-in-out;
      border-radius: 4px;
    }

    &-name {
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
      .track-grid-item-cover {
        filter: blur(0.5px) brightness(0.6);
      }
      .track-grid-item-name {
        opacity: 1;
      }
    }
  }
`;
