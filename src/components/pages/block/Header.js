import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../css/Header.css'
function Header() {
    return (
        <div className="row">
            <div className='col-lg-3'>
                <Link to={`/`} className="navbar-brand"> <Logo /> </Link>
            </div>
            <div className="col-lg-6" >
                <nav className="header__menu">
                    <ul >
                        <li className="nav-item"> <Link to={`/`} className="nav-link active" >Home</Link></li>
                        <li className="nav-item"> <Link to="/contact" className="nav-link active">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='col-lg-3'>
            <div className="header__cart">
                       
                    </div>
            </div>
        </div>





    )
}

export default Header