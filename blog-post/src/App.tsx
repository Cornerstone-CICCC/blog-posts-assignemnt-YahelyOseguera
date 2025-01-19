import { useState, useEffect } from 'react'
import BlogPostList from './components/blogPostList /blogPostList';
import './App.css'


function App() {
  const [posts, setPosts] = useState([]);
  const [getPost, setGetPost] = useState(false);

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data); 
  };
  
  const handleGetPost = () => {
    setGetPost(true);
  }
    useEffect(() => {
      console.log('Fetching posts');
      fetchPosts();
    }, []); 
  
  return ( 
    <>
      <h1>Blog Posts</h1>
      <button  onClick={handleGetPost}>Show Posts</button>
      {getPost && <BlogPostList posts={posts}/>}
    </>
  )
}

export default App
