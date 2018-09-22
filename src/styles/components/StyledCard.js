import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,45,66,.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  font-size: 14px;
  padding: 6px 8px;

  &:hover {
    background-color: #f5f6f7;
    border-bottom-color: rgba(9,45,66,.25);
  }

  .card-link {
    display: block;
    color: #333;
    font-size: 14px;
    text-decoration: none;
  }

  .card-title {
    margin-bottom: 5px;
  }
`;
