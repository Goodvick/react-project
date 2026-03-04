import React, { useState } from "react";
import './style/NullStyle.css';
import './style/App.css';
import PostList from "./conponents/PostList";
import MyButton from "./conponents/UI/button/MyButton";
import MyInput from "./conponents/UI/input/MyInput";

function App() {
    const [posts1, setPosts1] = useState([
        { id: 1, title: 'JavaScript', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
        { id: 2, title: 'JavaScript', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
        { id: 3, title: 'JavaScript', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
    ])
    // const [posts2, setPosts2] = useState([
    //     { id: 1, title: 'C++', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
    //     { id: 2, title: 'C++', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
    //     { id: 3, title: 'C++', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non quasi perspiciatis? Ipsum omnis assumenda quos, placeat officia maiores dolore cum tempore. Aperiam nobis architecto consectetur labore, tempora perferendis necessitatibus.' },
    // ])
    const [post, setPost] = useState({ title: '', body: '' })
    const addNewPost = (e) => {
        e.preventDefault()
        setPosts1([...posts1, { ...post, id: Date.now() }])
        setPost({ title: '', body: '' })
    }



    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Название поста" />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Описание поста" />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts1} title='Список постов № 1' />
            {/* <PostList posts={posts2} title='Список постов № 2' /> */}
        </div >
    );
}

export default App;