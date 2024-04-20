import Layout from '@layout/Layout'
import MainPage from '@pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
