import {useContext, useState} from "react";
import PostsContext from "../Plant/PostsContext";
import {RiCheckboxCircleFill, RiCloseCircleFill} from "react-icons/ri"
import './Harvest.scss'

const Harvest = () => {
    const postCtx = useContext(PostsContext)
    const [contactState, changeContactState] = useState(null)
    return (
        <div className="Harvest">
            <h1>Harvest</h1>
            <p id='desc'>Posts made by other urban farmers</p>
            <div className={`overlay ${contactState ? "on" : "off"}`}></div>
            <div className={`contactInfo ${contactState ? "on" : "off"}`}>
                {contactState}
                <button className="closeButton" onClick={() =>{changeContactState(null)}}><RiCloseCircleFill /></button>
            </div>
            {postCtx.posts.map(post => (
                <div className="post" key={post.title}>
                    <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                        <h2>{post.title}</h2>
                        <h2>${post.price}</h2>                        
                    </div>
                    <p>{post.description}</p>
                    <ul>
                    <li>Pesticides: {post.pesticides ? <RiCheckboxCircleFill className="check" /> : <RiCloseCircleFill className="x" />}</li>
                    <li>Vegan: {post.vegan ? <RiCheckboxCircleFill className="check" /> : <RiCloseCircleFill className="x" />}</li>
                    </ul>
                    <button className={`contactButton ${Boolean(post.contact) ? "on" : "off"}`} onClick={() => {changeContactState(post.contact)}} disabled={!Boolean(post.contact)}>Contact</button>
                </div>
            ))}
        </div>
    )
}

export default Harvest;