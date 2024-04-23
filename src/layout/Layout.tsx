import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import { css } from '@emotion/react'

const Layout = () => {
  return (
    <div
      css={css`
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
