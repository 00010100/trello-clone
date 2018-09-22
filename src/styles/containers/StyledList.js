import styled from 'styled-components';

export default styled.div`
  .list {
    background-color: #dfe3e6;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
  }

  .list-input {
    background: #fff;
    border: 1px solid #5ba4cf;
    box-shadow: 0 0 0 1px #5ba4cf;
    display: none;
    font-size: 14px;
    margin: 0;
    transition: margin 85ms ease-in,background 85ms ease-in;
    width: 100%;
    border-radius: 3px;
    line-height: 20px;
    outline: none;
    padding: 6px 8px;
    color: #000;
  }

  .list-btn {
    padding: 6px 8px;
    color: hsla(0,0%,100%,.8);
    display: flex;
    width: 100%;
    background-color: transparent;
    align-items: center;
    font-size: 14px;
    outline: none;
    transition: color 85ms ease-in;
    outline: none;
    border: none;
  }

  .list-controls {
    height: 32px;
    font-size: 14px;
    transition: margin 85ms ease-in,height 85ms ease-in;
    overflow: hidden;
    margin: 4px 0 0;
    width: 100%;
  }

  .list-header {
    flex: 0 0 auto;
    padding: 10px 8px 5px;
    position: relative;
    min-height: 20px;
  }

  .list-header textarea {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: none;
    font-weight: 700;
    resize: none;
    overflow: hidden;
    font-size: 14px;
    width: calc(100% - 30px);
    word-wrap: break-word;
    height: 30px;
    margin: -4px 0;
    min-height: 20px;
    padding: 4px 7px;
    max-height: 256px;
    outline: none;
    cursor: pointer;

    &:focus {
      background: #fff;
      border: 1px solid #5ba4cf;
      cursor: initial;
      box-shadow: 0 0 0 1px #5ba4cf;
    }
  }

  .list-form {
    border-radius: 3px;
    height: auto;
    min-height: 32px;
    padding: 4px;
    background-color: rgba(0,0,0,.12);
    transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
    cursor: pointer;

    &:hover {
      background-color: rgba(0,0,0,.24);
    }

    &.active {
      background-color: #dfe3e6;
      cursor: default;

      &:hover {
        background-color: #dfe3e6;
      }
    }
  }

  .card-wrapper {
    overflow: hidden;
    padding: 6px 8px 2px;
    position: relative;
    z-index: 10;
  }
`;
