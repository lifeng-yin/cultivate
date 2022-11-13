import {useContext} from "react";
import api from '../../api';
import * as content from "./content.json"
import PostsContext from "./PostsContext"
import './Plant.scss'
import { useNavigate } from 'react-router-dom'

const Plant = () => {
    const postsCtx = useContext(PostsContext)
    const navigate = useNavigate();
    const handleCreate = (e) => {

        navigate('/formsubmitted');
        
        e.preventDefault();
        const formData = new FormData(e.target)
        // api.makepost(formData.get('content'))
        postsCtx.addPost({
            title: formData.get("Title"), 
            price: formData.get("Price"),
            description: formData.get("Description"),
            pesticides: formData.get("Pesticides Used"),
            vegan: formData.get("Vegan")
        })
        
        console.log(postsCtx.posts)
    }

    return (
        <div className="post">
            <form onSubmit={handleCreate}>
                <h1>Create a post</h1>
                <p>Make a post advertising your crops</p>
                <h3>Crop</h3>
                <input name="Title" placeholder="Carrots" autoComplete='carrots' required></input>
                <h3>Price</h3>
                <input name="Price" placeholder="10" autoComplete='content' type='number' min = '0'required></input>
                
                <h3>Description</h3>
                <input name="Description" placeholder = 'Yummy carrots' autoComplete='amongus' required></input>

                <div>
                    <h3>Pesticides Used</h3>
                    <input className = 'check' name="Pesticides Used" type='checkbox'></input>
                </div>
                
                <div>
                    <h3>Vegan</h3>
                    <input className = 'check' name="Vegan" type='checkbox'></input>
                </div>

                <button type="submit" className="signup-button">Create</button>
            </form>
        </div>
    )
}

export default Plant;