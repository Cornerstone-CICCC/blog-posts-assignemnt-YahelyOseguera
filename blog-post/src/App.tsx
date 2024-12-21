import { useState, useEffect } from 'react'
//import BlogPostList from './components/blogPostList/blogPostList'
//import BlogPostComponent from './components/blogPost/blogPost'
import './App.css'

function BlogPostComponent(props: any) {
  return (
    <p> key={props.id} title: {props.title} body: {props.body}</p>
  )
}

function App() {
  const [posts, setPosts] = useState([])
 
  const fetchPosts = async (setPosts: any) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    const data = await response.json().then( data => data.slice(0,20)) 
    console.log(data)
    setPosts(data)

    useEffect(() => {
      console.log('fetching posts')
      fetchPosts(setPosts)
    }, [])

    console.log(posts)
  };


  return ( 
    <>
      <h1>Blog Posts</h1>
      <button onClick={fetchPosts}>Show Posts</button>

    <BlogPostComponent posts={posts} />
      <div>
        {posts.map((post: any) => (
            <p> key={post.id} title: {post.title} body: {post.body}</p>
        ))}
      </div>
    </>
  )
}

export default App
