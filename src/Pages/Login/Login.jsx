import { Navigate } from 'react-router-dom'
import '../Login/style.css'
import { useState, useEffect } from 'react'


export default function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [log, setLog] = useState(false)
    

    const handeSubmit =(e)=>{
        e.preventDefault()
        if (username && password != ''){
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            setLog(true)
            localStorage.setItem('login', log)
            localStorage.setItem('token', 'auth-token')
            setUsername('')
            setPassword('')
        }
        else{
            alert('Заполните все поля!')
        }
    }
    
    const handleLogout = (e)=>{
        e.preventDefault()
        localStorage.clear()
        setUsername('')
        setPassword('')
        setLog(false)
    }

    useEffect(()=>{
        const storageUser = localStorage.getItem('username')
        const storagePass = localStorage.getItem('password')
        if (storagePass && storageUser){
            setUsername(storageUser)
            setLog(true)
        }
    }),[username, password]

  

    return(
        <div className="login">
            { log ? (
                <div className="welcomePage">
                     <h1>Privet, {username}!</h1>
                     <button onClick={handleLogout}>Logout</button>
                </div>
            ):(
                <form action="/">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type = 'text'
                        id='username'
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}    
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type = 'password'
                        id='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)} 
                        required   
                    />
                    <button onClick={handeSubmit}>Register</button>
                </form>
            )}
        </div>
    )
}