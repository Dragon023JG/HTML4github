import React, { useState } from 'react';
import { posts } from './dataBase';
 
function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
   
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to create new post with title and content
    console.log('Title:', title);
    console.log('Content:', content);
    posts.push({title,content});
    console.log(posts);
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