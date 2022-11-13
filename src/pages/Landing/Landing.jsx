import bg from './landingbg.jpg'
import './Landing.scss'
import { RiPlantFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="Landing">
            <div>
                <div id ='h1wrapper'>
                    <h1>A </h1> 
                    <h1 className='gradient'>home</h1>
                </div>
                <h1 style = {{textAlign: 'center', marginTop: '-50px'}}>for urban farmers</h1>
                <div className="logo">
                    <RiPlantFill size="2em" />
                    <span>cultivate</span>
                </div>
                <br/>
                <h2>One of the toughest jobs in our current economy is the urban farmer. Cultivate gives a welcoming, feels-like-home platform for urban farmers to post about their crops.</h2>
                <button onClick = {()=> {
                    navigate('/Plant');
                }}>Get Started</button>
                <button onClick = {
                    () => {
                        navigate('/Harvest');
                    }
                }>View other farmers' posts</button>
            </div>
            <img src = {bg} alt = 'bg' id = 'bg'></img>
        </div>

    )
}

export default Landing;