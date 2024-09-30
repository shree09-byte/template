import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/404/NotFound'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'
import Admin from './pages/admin/Admin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
