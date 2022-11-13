import { Link } from 'react-router-dom';
import './Navbar.scss'
import { RiPlantFill } from 'react-icons/ri'
const Navbar = () => {
    return (
        <div className="Navbar">    
            <div className="logo">
                <Link key="Landing" to="/">
                    <RiPlantFill size="2em" />
                    <span>cultivate</span>
                </Link>
            </div> 
            
            <div>
                <Link key="Plant" to="/Plant">Plant</Link>
            </div>

            <div>
                <Link key="Harvest" to="/Harvest">Harvest</Link>
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