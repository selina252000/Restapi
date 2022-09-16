import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [posts,setPosts] = useState([]);

useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
   setPosts(response.data);
  });
},[]);
 
console.log("DATA >>", posts)


  return (
    <>
     <ul>
     {posts?.map((post) => (
        <li>{post.title}</li>
     ))
     
     }
     </ul>
    </>
  )
}

export default App


