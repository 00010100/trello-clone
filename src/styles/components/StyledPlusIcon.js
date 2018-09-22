import styled, { css } from 'styled-components';

export default styled.div`
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${props => props.style && css`${props.style}`}

  &:before, &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 10px;
    background-color: ${props => props.color};
    display: block;
  }

  &:before {
    transform: translateX(50%) rotate(90deg);
  }

  &:after {
    transform: translateX(50%);
  }
`;
