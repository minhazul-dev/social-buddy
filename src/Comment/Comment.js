import React from 'react';

const Comment = (props) => {
    const{email,name,body}=props.comment
    return (
        <div>
            <p>
                {name}: {email}
               
            </p>
            <h2> {body}</h2>
        </div>
    );
};

export default Comment;