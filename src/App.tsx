import { Global } from '@emotion/react'
import React from 'react'
import RootRouter from '@routers/RootRouter'
import { global } from '@styles/global'

function App() {
  return (
    <>
      <Global styles={global} />
      <RootRouter />
    </>
  )
}

export default App
