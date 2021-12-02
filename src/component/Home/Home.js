import React, { useEffect, useState } from 'react';
import Post from '../post/Post';

const Home = () => {

    const [post,setPost] = useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    return (
        <div >
            <h1>this is home</h1>
            <h4>total post : {post.length}</h4>
            {
                post.map(pst => <Post post={pst}></Post>)
            }
        </div>
    );
};

export default Home;