import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../comment/Comment';

const PostDetails = () => {
    const {postId} = useParams()

    const [postDetail,setPostDetail] = useState({})
    const [comment,setComment] = useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setPostDetail(data))
    },[]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setComment(data))
    },[])
    return (
        <div>
            <h3>this is post details : {postId}</h3>
            <p>user posted : {postDetail.id}</p>
            <p>title : {postDetail.title}</p>
            <p>post body : {postDetail.body}</p>
            <p>no of comment : {comment.length}</p>
            {
                comment.map(comm => <Comment comment={comm}></Comment>)
            }
        </div>
    );
};

export default PostDetails;