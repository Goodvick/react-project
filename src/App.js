import React, { useState } from "react";
import './style/NullStyle.css';
import './style/App.css';
import PostList from "./conponents/PostList";
import PostForm from "./conponents/PostForm";
import MySelect from "./conponents/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'aa', body: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
        { id: 2, title: 'vv', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
        { id: 3, title: 'bb', body: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
    ])
    const [selectedSort, setselectedSort] = useState('')
    const sortPost = (sort) => {
        setselectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: "15px 15px" }} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue="Сортировка"
                    options={[
                        { value: 'title', name: 'По заголовку' },
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title='Список постов № 1' />
                : <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Постов нет! Увы(</h2>
            }
        </div >
    );
}

export default App;