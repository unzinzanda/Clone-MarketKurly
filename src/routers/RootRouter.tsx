import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import MainPage from '../pages/MainPage'

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
