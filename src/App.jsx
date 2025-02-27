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
import {default as EditCategories} from './components/admin/category/Edit'

import {default as ShowBrands} from './components/admin/brand/Show'
import {default as CreateBrand} from './components/admin/brand/Create'
import {default as EditBrand} from './components/admin/brand/Edit'
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
          <Route path="/admin/categories/edit/:id" element={
            <AdminRequireAuth>
              <EditCategories />
            </AdminRequireAuth>
          } />
          <Route path="/admin/brands" element={
            <AdminRequireAuth>
              <ShowBrands />
            </AdminRequireAuth>
          } />
          <Route path="/admin/brands/create" element={
            <AdminRequireAuth>
              <CreateBrand />
            </AdminRequireAuth>
          } />
          <Route path="/admin/brands/edit/:id" element={
            <AdminRequireAuth>
              <EditBrand />
            </AdminRequireAuth>
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
