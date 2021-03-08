import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const[posts, setPost]= useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(response =>response.json())
        .then(data =>setPost(data))
    },[])

    return (
        <div>
            <h2>This is home</h2>
            <h3> I have got {posts.length} posts</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;