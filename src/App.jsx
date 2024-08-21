import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Pages/Main/Main'
import PageOne from './Pages/PageOne/PageOne'
import PageTwo from './Pages/PageTwo/PageTwo'
import Login from './Pages/Login/Login'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './app.css'


function App() {

  return (
    <div className="app">
      <Header/>
      <div className="app__container">
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='PageOne' element={<PageOne/>}/>
            <Route path='PageTwo' element={<PageTwo/>}/>
            <Route path='Login' element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
      </div>
  )
}

export default App
