import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import MainPage from '../pages/MainPage'
import CategoryDetailPage from '../pages/CategoryDetailPage'

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories/:id" element={<CategoryDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
