import React from 'react'
import './FormSubmitted.scss'
import { Link } from 'react-router-dom';

import {useContext} from "react";
import PostsContext from "../Plant/PostsContext";

const FormSubmitted = () => {
    const postCtx = useContext(PostsContext)

    return (
        <div id='formsubmitted'>
            <h1>Post Created Successfully!</h1>

            <p>Your post, {postCtx.posts[0].title} was successfully created! Interested buyers will contact you at {postCtx.posts[0].contact}.</p>
            
            <h3>
                <Link key='Plant' to='/Plant'>Make another post</Link><br/>
                <Link key='Harvest' to='/Harvest'>See other peoples' posts</Link>
            </h3>
        </div>
    )
}

export default FormSubmitted