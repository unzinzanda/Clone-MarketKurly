import { css } from '@emotion/react'

export const menu = css`
  width: 200px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  p {
    font-weight: bold;
  }

  :hover {
    path {
      fill: #5f0080;
    }
    p {
      color: #5f0080;
    }
    ul {
      display: block;
    }
  }
`

export const drop = css`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;

  border: 1px solid #d9d9d9;
  background-color: white;

  :hover {
    display: block;
  }
`
export const category = css`
  display: block;
  width: 200px;
  padding: 10px;
  font-size: 14px;

  :hover {
    background-color: #f5f5f5;
    color: #5f0080;
  }
`
