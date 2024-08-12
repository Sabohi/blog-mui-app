
// Internal dependencies
import { FormValues } from "core/models/blog.model";

export async function createBlog(blogData: FormValues, mutateBlogs: Function) {
    const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
    });

    if (!response.ok) {
        throw new Error('Error creating blog');
    }
    await mutateBlogs(); 
    return await response.json();
}

export async function updateBlog(id: string, blogData: FormValues, mutateBlogs: Function, mutateBlogById: Function) {
    const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
    });

    if (!response.ok) {
        throw new Error('Error updating blog');
    }
    await mutateBlogs(); 
    await mutateBlogById(id); 
    return await response.json();
}

export async function deleteBlog(id: string | undefined, mutateBlogs: Function, mutateBlogById: Function) {
    try {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });

        if (response.status === 204) {
            await mutateBlogs(); 
            await mutateBlogById(id); 
            alert('Blog deleted successfully');
        } else {
            const data = await response.json();
            console.error('Error:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}