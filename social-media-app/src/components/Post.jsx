import React,{useState} from 'react';
import Comment from './comment';

function Post(props){
   const[likes, setLikes]= useState(0);

    function handleLike(){
        setLikes(likes+1);
     
    }
  return(
    <div className='post-container'>
      <h1>{props.title}</h1>

     <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>like</button>
      <p>Comments:</p>
      <Comment content="this a test comment!"/>
      <Comment content="this another test comment!"/>
      <Comment content="this is yet another test comment!"/>
    </div>
  )
}
export default Post
