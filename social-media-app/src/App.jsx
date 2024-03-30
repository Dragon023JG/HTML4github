
import React from 'react'
import CreatePostForm from './components/CreatePostForm'
import Feed from './components/Feed'
import './App.css'
function App() {

  return(
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
        <CreatePostForm/> 
        
        <Feed />
        
        {/* <Post content="this a test post!"/>
        <Post content ="this is another test post!"/> */}

        <post/>
    </div>
  );

}

export default App
