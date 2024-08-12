'use client';

// Internal dependencies
import BlogForm from 'app/blog/blog-form';
import { useBlogById } from 'core/hooks/useBlogs';

/**
 * `EditPostPage` is a React functional component that renders the `BlogForm` component
 * for editing a blog post. It passes the `id` of the blog post to the `BlogForm` as a prop.
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.params - Parameters from the route.
 * @param {string} props.params.id - The ID of the blog post to be edited.
 * @returns {JSX.Element} The rendered `BlogForm` component with the blog post ID.
 */
function EditPostPage({ params }: { params: { id: string } }) {
    const { post, isLoading, isError, mutate } = useBlogById(params?.id);

    return (
        <BlogForm data={post} />
    );
};

export default EditPostPage;