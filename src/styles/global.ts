import { css } from '@emotion/react'

export const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
