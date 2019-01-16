import React from 'react';
import Post from './Post';
import { Link } from "react-router-dom";
import PostForm from './PostForm';

export default function Home (props) {
  const posts = props.logged ? (
    props.posts.map(post => 
      <Post comment={ props.comment } key={ post._id } post={ post }/>
    )
  ) : (
    <p>You have to <Link to="/login">login</Link> to go this page</p>
  )

  const postform = props.logged ? (
    <PostForm post={ props.post }/>
  ):(<p></p>)
  
  // console.log(props)
  return (
    <div className="container">
      <h3 className="center">Home</h3>
      { postform }
      { posts }
    </div>
  )
}


