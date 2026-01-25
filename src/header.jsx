import './App.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="content container">
                <div className="logo">
                    <h1>To<span>D</span>o</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/home"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink></li>
                        <li><NavLink to="/about"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header