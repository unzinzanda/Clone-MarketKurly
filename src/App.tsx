import { Global } from '@emotion/react'
import React from 'react'
import { global } from './styles/global'
import RootRouter from './routers/RootRouter'

function App() {
  return (
    <>
      <Global styles={global} />
      <RootRouter />
    </>
  )
}

export default App
