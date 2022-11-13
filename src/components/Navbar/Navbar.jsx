import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss'
import { RiPlantFill } from 'react-icons/ri'
const Navbar = () => {
    const activeStyle = {
        'text-decoration': 'underline',
        'text-decoration-color': 'darkgreen',
        'text-decoration-thickness': '2px',
        'font-weight': 'bold'
    }

    return (
        <div className="Navbar">    
            <div className="logo">
                <Link key="Landing" to="/">
                    <RiPlantFill size="2em" />
                    <span>cultivate</span>
                </Link>
            </div> 
            
            <div>
                <NavLink key="Plant" to="/Plant" style={({ isActive }) => (
                    isActive ? activeStyle : undefined
                )}>Plant</NavLink>
            </div>

            <div>
                <NavLink key="Harvest" to="/Harvest" style={({ isActive }) => (
                    isActive ? activeStyle : undefined
                )}>Harvest</NavLink>
            </div>

            <div id='login'>
                <Link key='Log In' to='/login'>Log In</Link>
            </div>
            <div id='signup'>
                <Link key='Sign Up' to='/signup'>Sign Up</Link>
            </div>

        </div>
    )
}

export default Navbar;