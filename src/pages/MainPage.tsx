import React from 'react'
import Carousel from '../components/common/Carousel'
import { css } from '@emotion/react'

const MainPage = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Carousel />
    </div>
  )
}

export default MainPage
