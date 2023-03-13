import React from 'react'
import { BrowserRouter,MemoryRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PageNotFound from './pages/PageNotFound';
const App = () => {
  return (
    <section className='mainBlock'>
          <MemoryRouter>
              <Navbar />
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='*' element={<PageNotFound/>}/>
              </Routes>
          </MemoryRouter>
    </section>
  )
}

export default App
