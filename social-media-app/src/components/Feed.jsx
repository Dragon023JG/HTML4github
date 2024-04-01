import React from 'react';
import Post from './Post'; // Import the Post component\
function Feed( {posts} ) {
  if (!Array.isArray(posts)) {
    console.error("`posts` is not an array:", posts);
    return null; 
  }
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post
          key={index}
          content={post.content}
          title ={post.title}
          likes={post.likes}
          comments={post.comments}
          // Add other props as needed: title, likes, comments, etc.
        />
      ))}
    </div>
  );
}

export default Feed;
