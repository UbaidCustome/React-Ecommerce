import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/common/Home'
import Shop from './components/common/Shop'
import Product from './components/common/Product'
import Cart from './components/common/Cart'
import Checkout from './components/common/Checkout'
import Login from './components/admin/Login'
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/admin/Dashboard'
import { AdminRequireAuth } from './components/admin/adminRequireAuth'
import {default as ShowCategories} from './components/admin/category/Show'
import {default as CreateCategories} from './components/admin/category/Create'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin/dashboard" element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          } />

          <Route path="/admin/categories" element={
            <AdminRequireAuth>
              <ShowCategories />
            </AdminRequireAuth>
          } />
          <Route path="/admin/categories/create" element={
            <AdminRequireAuth>
              <CreateCategories />
            </AdminRequireAuth>
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
