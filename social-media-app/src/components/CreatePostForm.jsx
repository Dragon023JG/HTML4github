import React, { useState } from 'react';
import { posts } from './dataBase';
 
function CreatePostForm({onNewPost}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost ={title,content, likes:0, comments:[]};
    onNewPost(newPost);
    // Clear form fields after submission
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;