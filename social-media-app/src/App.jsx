
import React, {useState} from 'react';
import CreatePostForm from './components/CreatePostForm'
import Feed from './components/Feed'
import './App.css'
function App() {
  const [allPosts, setAllPosts] =useState( [{ title: "prueba1", content: "contenido1", likes: 0 }]);

  const addNewPost = (newPost) => {
    setAllPosts([...allPosts, newPost]);
  };
  console.log("All Posts:", allPosts); // Log allPosts
  return(
    <div>
      <h1>Fakebook!</h1>
        {/* CreatePostForm */}
        <CreatePostForm onNewPost={addNewPost}/>
        <Feed posts={allPosts}/>

        {/* <Post/>  */}
    </div>
  );

}

export default App
