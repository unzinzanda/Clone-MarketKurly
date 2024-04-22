import { css } from '@emotion/react'

interface arrowButtonProps {
  dir: string
}

export const container = css`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  :hover {
    button {
      opacity: 1;
    }
  }
`

export const carousel = css`
  height: 370px;
  display: flex;
`

export const imageBox = css`
  width: 100vw;
`

export const image = css`
  width: 100vw;
  height: 370px;
`

export const arrowButton = (props: arrowButtonProps) => css`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${props.dir === 'left' ? '100px' : ''};
  right: ${props.dir === 'right' ? '100px' : ''};
  transform: translate(0, -50%);

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 100%;

  opacity: 0;

  transition: opacity 0.5s ease;

  img {
    width: 30px;
    height: 30px;
  }

  :hover {
    opacity: 1;
  }
`
