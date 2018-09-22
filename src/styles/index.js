/* eslint no-unused-expressions: 0 */
import { injectGlobal, css } from 'styled-components';

injectGlobal`
  // Reset and normalize
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
    color: #000;
    background: #fff;
    font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: separate;
    border-spacing: 0;
    vertical-align: middle;
  }
  caption,
  th,
  td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle;
  }
  a img {
    border: none;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  article,
  details,
  section,
  summary,
  aside,
  main,
  menu,
  nav,
  figcaption,
  figure,
  footer,
  header,
  hgroup {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background-color: transparent;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  b,
  strong {
    font-weight: bold;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }
  pre {
    overflow: auto;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    -webkit-appearance: button;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input {
    line-height: normal;
  }
  input[type='checkbox'],
  input[type='radio'] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  input[type='search'] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    border: 0;
    padding: 0;
  }
  textarea {
    overflow: auto;
  }
  optgroup {
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  html,
  body,
  #root {
    height: 100%;
    font-size: 18px;
    line-height: 1.3;
  }
  h2,
  h3,
  h4 {
    font-weight: bold;
  }
  h2 {
    font-size: 2.22rem;
  }
  h3 {
    font-size: 1.22rem;
  }

  html {
    height: 100%;
    font-size: 16px;
    line-height: 1.3;
    font-family: sans-serif;

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 767px) {
      font-size: 12px;
    }

    @media (max-width: 600px) {
      font-size: 11px;
    }
  }

  body {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .bold {
    font-weight: bold;
  }

  .m-t-1r {
    margin-top: 1rem;
  }

  .m-t-2r {
    margin-top: 2rem;
  }

  .list-wrapper {
    width: 272px;
    margin: 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    border-radius: 3px;

    &:first-child {
      margin-left: 8px;
    }

    ${props => props.listCreator
      && css`
        height: auto;
        background-color: rgba(0, 0, 0, 0.12);
        cursor: pointer;
        color: #fff;

        &:hover {
          background-color: rgba(0, 0, 0, 0.24);

          .oGmns:before,
          .oGmns:after {
            background-color: #fff;
          }
        }
      `}

    ${props => props.addListActive
      && css`
        border-radius: 3px;
        height: auto;
        min-height: 32px;
        padding: 4px;
        transition: background 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;
      `}
  }

  .close-btn {
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    width: 32px;
    background-color: transparent;
    border: none;
    outline: none;
    position: relative;
    padding: 0;

    &.abs-pos {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &.top-right {
      position: absolute;
      top: 0;
      right: 0;
    }

    &:before, &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 16px;
      width: 2px;
      background-color: #798d99;
      }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
      &:before, &:after {
        background-color: #516b7a;
        text-decoration: none;
      }
    }
  }

  textarea {
    border-radius: 3px;
    font-size: 14px;
    resize: none;
    width: 100%;
    border: none;
    outline: none;
    display: block;
    text-decoration: none;
  }

  .add-btn {
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    line-height: 20px;
    margin: 8px 4px 0 0;
    outline: none;
    padding: 6px 12px;
    text-align: center;
    border-radius: 3px;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    background-color: #5aac44;
    box-shadow: 0 1px 0 0 #3f6f21;
    border: none;
    color: #fff;
    float: left;
    min-height: 30px;
    height: 30px;
    margin-top: 0;
    padding-top: 4px;
    padding-bottom: 4px;

    &:hover {
      background-color: #519839;
      box-shadow: 0 1px 0 0 #3f6f21;
      border: none;
      outline: none;
      color: #fff;
    }
  }

`;
