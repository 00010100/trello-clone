import styled from 'styled-components';

export default styled.div`

  &.active {
    padding: 4px;
  }

  .card-add-btn {
    padding: 8px;
    position: relative;
    width: 100%;
    text-decoration: none;
    user-select: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    outline: none;
    border: none;
    background-color: transparent;

    &:hover {
      background-color: rgba(9, 45, 66, 0.13);
      color: #17394d;

      .text-btn {
        text-decoration: underline;
        color: #17394d;
      }

      .irXtqT:before,
      .irXtqT:after {
        background-color: #17394d;
      }
    }
  }

  .text-btn {
    color: #6b808c;
    user-select: none;
    font-size: 14px;
  }

  .card-add-form {
    padding: 0 4px;

    textarea {
      border: none;
      margin-bottom: 8px;
      max-height: 162px;
      min-height: 54px;
      overflow: hidden;
      word-wrap: break-word;
      padding: 6px 8px 2px;
      outline: none;
      resize: none;
      height: 66px;
      width: 100%;
      font-size: 14px;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 0 rgba(9,45,66,.25);
      display: block;
      max-width: 300px;
      position: relative;
      text-decoration: none;
      z-index: 0;
      transition-property: background-color,border-color,box-shadow;
      transition-duration: 85ms;
      transition-timing-function: ease;
    }
  }
`;
