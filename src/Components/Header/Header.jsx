import '../Header/style.css'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <div className="header">
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='PageOne'>Страница №1</Link></li>
                <li><Link to='PageTwo'>Страница №2</Link></li>
                <li><Link to='Login'>Логин</Link></li>
            </ul>
        </div>
    )
}