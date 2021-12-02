import React from 'react';
import { useNavigate } from 'react-router';

const Post = (props) => {
    const {title,body,id} = props.post

    const navigate = useNavigate()
    const showButton = (id) =>{
        navigate(`post/${id}`)
    }

    return (
        <div style={{border:'2px solid purple',borderRadius : '5px',padding:'5px',margin:'5px',width:'350px',}}>
            <h2><strong>{id}</strong>{title}</h2>
            <p>{body}</p>
            <button onClick={()=>showButton(id)}>show comment</button>
        </div>
    );
};

export default Post;