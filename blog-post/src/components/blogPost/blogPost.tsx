import { useState , useEffect} from 'react'

function BlogPostComponent(props: any) {
    const [post, setPost] = useState(props.post)

    const fetchPosts = async (setPosts: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        const data = await response.json().then( data => data.slice(0,20)) 
        console.log(data)
        setPosts(data)
    
      };

    useEffect(() => {
        setPost(props.post)
    }, [props.post])


    fetchPosts(setPost)
  return (
    <p> key={props.id} title: {props.title} body: {props.body}</p>
  )
}

export default BlogPostComponent