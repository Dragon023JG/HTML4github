import React from 'react';
import Comment from './comment';
function Post(){
  return(
    <div>
      <h3>Test Post</h3>
      <p>This is a test post we'll edit later!</p>
      <p>Likes: 30</p>
      <p>Comments:</p>
      <Comment content="this a test comment!"/>
      <Comment content="this another test comment!"/>
      <Comment content="this is yet another test comment!"/>
    </div>
  )
}
export default Post
