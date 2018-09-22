import styled from 'styled-components';

export default styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #4bbf6b;

  .board-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .board-main-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 0;
    transition: margin 0.1s ease-in;
  }

  .board-canvas {
    position: relative;
    flex-grow: 1;
  }

  #board {
    user-select: none;
    white-space: nowrap;
    margin-bottom: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
