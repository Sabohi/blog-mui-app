// Internal dependencies
import BlogForm from 'app/blog/blog-form';

/**
 * `NewPostPage` is a React functional component that renders the `BlogForm` component.
 * This page is used for creating a new blog post.
 * 
 * @returns {JSX.Element} The rendered `BlogForm` component.
 */
const NewPostPage: React.FC = () => {
    return (
        <BlogForm />
    );
};

export default NewPostPage;