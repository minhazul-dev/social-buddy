import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams()
    const [post, setPost]=useState({})
    const[comments,setComments]=useState([])
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(response => response.json())
        .then(data=> setPost(data)) 

    },[])
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(response => response.json())
        .then(data=> setComments(data))

    },[])
    return (
        <div>
            <h2> This is post detail of  {id}</h2>
            <p> This is the  post of : {post.id}</p>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <h2>Number of comments: {comments.length}</h2>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;