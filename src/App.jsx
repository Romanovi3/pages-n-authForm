import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './Pages/Main/Main'
import PageOne from './Pages/PageOne/PageOne'
import PageTwo from './Pages/PageTwo/PageTwo'
import Login from './Pages/Login/Login'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Pages/Profile/Profile'
import './app.css'


function App() {

  const [ auth, setAuth ] = useState()

  useEffect(()=>{
    const storageAuth = localStorage.getItem('token')
    setAuth(!!storageAuth)
  })

  return (
    <div className="app">
      <Header/>
      <div className="app__container">
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='PageOne' element={auth ? <PageOne/> : <Navigate to='/Login'/>}/>
            <Route path='PageTwo' element={auth ? <PageTwo/> : <Navigate to='/Login'/>}/>
            <Route path='Profile' element ={auth ? <Profile/> : <Navigate to='/Login'/>}/>
            <Route path='Login' element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
      </div>
  )
}

export default App
