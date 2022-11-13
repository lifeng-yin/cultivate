import { createContext } from "react";

const PostsContext = createContext({
    posts: [],
    changePosts: () => {},
    addPost: () => {}
})

export default PostsContext