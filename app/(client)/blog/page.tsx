'use client';
import BlogList from 'app/blog/blog-list'; 
import { useBlogs } from 'core/hooks/useBlogs';

export default function BlogPage() {
    const { posts, isLoading, isError, mutate } = useBlogs();
    return <BlogList destinations={posts} />;
}



