import {useContext} from "react";
import PostsContext from "../Plant/PostsContext";

const Harvest = () => {
    const postCtx = useContext(PostsContext)
    return (
        <div className="Harvest">
            <h1>Harvest</h1>
            {postCtx.posts.map(post => (
                <div className="post">
                    {post.title}
                    {post.price}
                    {post.description}
                    {post.pesticides}
                    {post.vegan}
                </div>
            ))}
        </div>
    )
}

export default Harvest;