import styled from 'styled-components';

export default styled.div`
  height: 100%;
  border: 1px solid black;
  font-size: 20px;
  margin: 0 20px;

  .link {
    text-decoration: none;
    color: #fff;
  }

  .track-listed {
    background: grey;
    padding: 5px 20px;
    border: 1px solid #fff;

    &:hover {
      background: #000;
      color: #fff;
      cursor: pointer;
    }
  }
`;
