// Internal dependencies
import BlogForm from 'app/blog/blog-form';

function EditPostPage({ params }: { params: { id: string } }){
    return (
        <BlogForm id={params?.id}/>
    );
};

export default EditPostPage;
