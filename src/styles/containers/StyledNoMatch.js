import styled from 'styled-components';

export default styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 30;
  background: #1b0034;
  background-image: linear-gradient(135deg, #1b0034 10%, #33265c 100%);
  background-attachment: fixed;
  background-size: cover;

  .error {
    width: 100%;
    height: auto;
    margin: 50px auto;
    text-align: center;
    margin-bottom: 0;
  }

  .dracula {
    width: 230px;
    height: 300px;
    display: inline-block;
    margin: auto;
    overflowx: hidden;
  }

  .error .p {
    height: 100%;
    color: #c0d7dd;
    font-size: 280px;
    margin: 50px;
    display: inline-block;
    font-family: 'Anton', sans-serif;
    font-family: 'Comfortaa', cursive;
    font-family: 'Combo', cursive;
    /* font-family: 'Coming Soon', cursive; */
    /* font-family: 'Jim Nightshade', cursive; */
  }

  .con {
    width: 500px;
    height: 500px;
    position: relative;
    margin: 9% auto 0;
    animation: ani9 0.7s ease-in-out infinite alternate;
  }

  @keyframes ani9 {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(30px);
    }
  }

  .con > * {
    position: absolute;
    top: 0;
    left: 0;
  }

  .hair {
    top: -20px;
    width: 210px;
    height: 200px;
    background: #c0d7dd;
    border-radius: 0 50% 0 50%;
    transform: rotate(45deg);
    background: #33265c;
  }
  .hair-r {
    left: 20px;
    width: 210px;
    height: 200px;
    background: #c0d7dd;
    border-radius: 0 50% 0 50%;
    transform: rotate(45deg);
    background: #33265c;
  }
  .head {
    width: 200px;
    height: 200px;
    background: #c0d7dd;
    border-radius: 0 50% 0 50%;
    transform: rotate(45deg);
  }
  .eye {
    width: 20px;
    height: 20px;
    background: #111113;
    border-radius: 50%;
    top: 15%;
    left: 11.5%;
    transition: 0.3s linear;
  }
  .eye-r {
    left: 24%;
  }

  .mouth {
    width: 60px;
    height: 20px;
    background: #840021;
    top: 20%;
    left: 14%;
    border-radius: 50% / 0 0 100% 100%;
  }
  .mouth::after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 13px solid #ffffff;
    left: 10px;
  }
  .mouth::before {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 13px solid #ffffff;
    left: 40px;
  }

  .blod {
    width: 8px;
    height: 20px;
    background: #840021;
    top: 23%;
    left: 17%;
    border-radius: 20px;
  }
  .blod::after {
    width: 2px;
    height: 10px;
    background: #fff;
    top: 20%;
    left: 10%;
    border-radius: 20px;
  }
  .blod2 {
    top: 23%;
    left: 20%;
    width: 13px;
    height: 13px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(130deg);
    animation: blod 2s linear infinite;
    opacity: 0;
  }
  @keyframes blod {
    0% {
      opacity: 1;
    }
    100% {
      background: red;
      opacity: 0;
      top: 50%;
    }
  }

  /* page-ms */
  .page-ms {
    transform: translateY(-50px);
  }

  .error p.page-msg {
    text-align: center;
    color: #c0d7dd;
    font-size: 30px;
    font-family: 'Combo', cursive;
    margin-bottom: 20px;
  }

  a.go-back {
    font-size: 30px;
    font-family: 'Combo', cursive;
    border: none;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s linear;
    z-index: 9;
    border-radius: 10px;
    background: #c0d7dd;
    color: #33265c;
    box-shadow: 0 0 10px 0 #c0d7dd;
    margin-top: 20px;
    display: inline-block;

    &:hover {
      box-shadow: 0 0 20px 0 #c0d7dd;
    }
  }
`;
