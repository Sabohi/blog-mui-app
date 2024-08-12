'use client';
import BlogList from 'app/blog/blog-list'; 
import { useBlogs } from 'core/hooks/useBlogs';
import LoaderComponent from 'ui/loader-component';

export default function BlogPage() {
    const { posts, isLoading, isError, mutate } = useBlogs();
    
    if (isLoading) {
        return <LoaderComponent />;
    }

    if (isError) {
        return <p>Error loading posts</p>;
    }

    return <BlogList destinations={posts} />;
}



