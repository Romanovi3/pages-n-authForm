import { useState, useEffect } from 'react'
import '../Footer/style.css'


export default function Footer(){

 const [data, setDate] = useState(new Date())
 
 setInterval(()=>{
    setDate(new Date())
 }, 1000)
 

    return(
        <div className="footer">
            <h3>All right reserved(c) {data.toLocaleTimeString()}</h3>
        </div>
    )
}