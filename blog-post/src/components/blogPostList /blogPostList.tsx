import BlogPostComponent from "../blogPost/blogPost"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface blogPostProps {
    posts: Post[]
}

const BlogPostList = ({posts}: blogPostProps ) => {
    return (
        <div>
            {posts.map((post) => (
                <BlogPostComponent key={post.id} post={post} />
            ))}
        </div> 
    )
}

export default BlogPostList;