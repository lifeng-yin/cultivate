import api from '../../api';

const Plant = () => {
    const handleCreate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        api.makepost(formData.get('content'))
        console.log(formData.get('content'))
    }

    return (
        <div className="post">
            <form onSubmit={handleCreate}>
                <h1>Create a post</h1>
                <input name="content" placeholder="Content" autoComplete='content' required></input>

                <button type="submit" className="signup-button">Create</button>
            </form>
        </div>
    )
}

export default Plant;