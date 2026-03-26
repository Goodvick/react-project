import React, { useState, useEffect } from "react";
import './style/NullStyle.css';
import './style/App.css';
import PostList from "./conponents/PostList";
import PostForm from "./conponents/PostForm";
import PostFilter from "./conponents/PostFilter";
import MyModal from "./conponents/UI/MyModal/MyModal";
import MyButton from "./conponents/UI/button/MyButton";
import { usePosts } from "./conponents/hooks/usePosts";
import PostService from "./API/PostServise";
import Loader from "./conponents/UI/Loader/Loader";
import { useFetching } from "./conponents/hooks/useFetching";


function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



    return (
        <div className="App">
            <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>Создать пользователя</MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: "15px 15px" }} />

            <PostFilter filter={filter} setFilter={setFilter} />
            {isPostsLoading
                ? <Loader />
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов № 1' />
            }
        </div >
    );
}

export default App;