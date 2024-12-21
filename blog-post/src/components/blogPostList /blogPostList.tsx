import BlogPostComponent from '../blogPost/blogPost'

function BlogPostList(props: any) {
    return (
        <BlogPostComponent post={props.post} />
    )
}
    
export default BlogPostList