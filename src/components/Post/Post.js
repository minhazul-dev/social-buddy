import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title,id,body } =props.post
    const history = useHistory()
    const showComments = id =>{
        const url= `post/${id}`
        history.push(url)

    }
    return (
        <div>
            <h3> <strong> ID : {id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;