import { Link } from 'react-router-dom';
import './Navbar.scss'

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Plant', path: '/plant' },
    { name: 'Harvest', path: '/harvest' },
]
const Navbar = () => {
    return (
        <div className="Navbar">
            {pages.map(page => (
                <div>
                    <Link key={page.name} to={page.path}>{page.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Navbar;