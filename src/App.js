import React, { useMemo, useState } from "react";
import './style/NullStyle.css';
import './style/App.css';
import PostList from "./conponents/PostList";
import PostForm from "./conponents/PostForm";
import PostFilter from "./conponents/PostFilter";
import MyModal from "./conponents/UI/MyModal/MyModal";
import MyButton from "./conponents/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'aa', body: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
        { id: 2, title: 'vv', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
        { id: 3, title: 'bb', body: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Создать пользователя</MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: "15px 15px" }} />

            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов № 1' />

        </div >
    );
}

export default App;