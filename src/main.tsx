import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from '../src/pages/Login'
import Register from '../src/pages/Register'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>
)
