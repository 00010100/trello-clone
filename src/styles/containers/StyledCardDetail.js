import styled from 'styled-components';

export default styled.div`
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.64);
  height: 100%;
  justify-content: center;
  left: 0;
  display: flex;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  .card-modal {
    background-color: #ebeef0;
    border-radius: 2px;
    margin: 48px 0 80px;
    overflow: hidden;
    position: relative;
    width: 768px;
    z-index: 25;
    padding: 12px 40px 8px 56px;
  }

  .card-content {
    display: flex;
    justify-content: space-between;
  }

  .card-header-container {
    margin-bottom: 20px;
  }

  .card-content-left {
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 24px;
    padding: 0 8px 8px 16px;
    position: relative;
    width: 552px;
    z-index: 0;
  }

  .card-content-right {
    padding: 8px 16px 8px 8px;
    width: 168px;
    overflow: hidden;
    z-index: 10;
  }

  .card-description-btn {
    background-color: rgba(9,45,66,.08);
    border-radius: 3px;
    color: #6b808c;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 54px;
    padding: 7px 9px;
    text-decoration: none;
    width: 100%;
    outline: none;
    border: none;
    font-size: 14px;
    margin-top: 8px;

    &:hover {
      background-color: rgba(9,45,66,.13);
      color: #092d42;
    }
  }

  .card-title {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: none;
    font-size: 20px;
    font-weight: 700;
    height: 24px;
    line-height: 24px;
    min-height: 24px;
    padding: 4px;
    resize: none;
    overflow: hidden;
    overflow-wrap: break-word;
    height: 34px;
    width: 100%;
    font-size: 20px;

    &:focus {
      background: #fff;
      border: 1px solid #5ba4cf;
      box-shadow: 0 0 0 1px #5ba4cf;
    }
  }

  .card-subtitle {
    color: #6b808c;
    font-size: 14px;
    margin-left: 4px;
  }

  .delete-btn {
    background-color: #eb5a46;
    box-shadow: 0 1px 0 0 #b04632;
    border: none;
    font-size: 14px;
    color: #fff;
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 700;
    height: 32px;
    margin-top: 8px;
    max-width: 300px;
    overflow: hidden;
    padding: 6px 12px;
    position: relative;
    text-decoration: none;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;

    &:hover {
      background-color: #cf513d;
      box-shadow: 0 1px 0 0 #b04632;
    }
  }

  .card-description-container {

    textarea {
      background-color: rgba(9,45,66,.08);
      min-height: 40px;
      padding: 7px 9px;
      margin-top: 8px;

      &.active {
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        height: 108px;
        background-color: #fff;
        outline: none;
        border: 1px solid #5ba4cf;
        box-shadow: 0 0 0 1px #5ba4cf;
      }
    }
  }

  .list-controls {
    margin-top: 8px;
  }

  .card-description-label {
    display: block;
    font-size: 16px;
    color: #17394d;
    font-weight: bold;
    line-height: 20px;
  }

  .descr-title-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .edit-btn-label {
    text-decoration: underline;
    margin-left: 5px;
    color: #6b808c;
    font-size: 14px;
    outline: none;
    border: none;
    background-color: transparent;

    &:hover {
      color: #092d42;
    }
  }

  .edit-btn {
    width: 100%;
    text-decoration: none;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
    margin-top: 8px;
    text-align: left;

    p {
      color: #17394d;
      line-height: 20px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
