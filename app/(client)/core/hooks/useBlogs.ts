import useSWR from 'swr';
// import { FormValues } from 'core/models/blog.model';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useBlogs() {
    const { data, error, mutate } = useSWR('/api/blog', fetcher);
    return {
        posts: data,
        isLoading: !error && !data,
        isError: error,
        mutate,
    };
}

export function useBlogById(id: string | undefined) {
    const url = id ? `/api/blog/${id}` : null;
    const { data, error, mutate } = useSWR(url, fetcher);
    return {
        post: data,
        isLoading: !error && !data,
        isError: error,
        mutate, 
    };
}
