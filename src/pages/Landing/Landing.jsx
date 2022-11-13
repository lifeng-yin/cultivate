import bg from './landingbg.jpg'
import './Landing.scss'
import { RiPlantFill } from 'react-icons/ri'


const Landing = () => {
    return (
        <div className="Landing">
            <div>
                <div className="logo">
                    <RiPlantFill size="2em" />
                    <span>cultivate</span>
                </div> 
            </div>
            <img src = {bg} alt = 'bg' id = 'bg'></img>
        </div>

    )
}

export default Landing;