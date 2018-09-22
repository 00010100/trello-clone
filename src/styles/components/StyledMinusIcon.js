import styled from 'styled-components';

export default styled.div`
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 4px;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: ${props => props.color};
    display: block;
  }

  &:after {
    transform: translateX(50%);
  }
`;
