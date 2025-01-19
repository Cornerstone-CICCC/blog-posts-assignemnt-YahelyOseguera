

type Post ={
  id: number;
  title: string;
  body: string;
  userId: number;
}


interface blogPostProps{
  post: Post;
}
const BlogPostComponent  = ({ post }: blogPostProps) => {
  return (
    
      <div className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p><strong>Author ID:</strong> {post.userId}</p>
      </div>
  );
};

export default BlogPostComponent;