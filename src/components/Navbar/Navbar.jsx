import { Link } from 'react-router-dom';
import './Navbar.scss'
import { RiPlantFill } from 'react-icons/ri'
const Navbar = () => {
    return (
        <div className="Navbar">
            <Link key="Landing" to="/">
                <div className="logo">
                    <RiPlantFill size="2em" />
                    <span>cultivate</span>
                </div>
            </Link>
            
            <div>
                <Link key="Plant" to="/Plant">Plant</Link>
            </div>

            <div>
                <Link key="Harvest" to="/Harvest">Harvest</Link>
            </div>
        </div>
    )
}

export default Navbar;