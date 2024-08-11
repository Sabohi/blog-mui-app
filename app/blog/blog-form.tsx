'use client';

// External dependencies
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'; 

// Internal dependencies
import { FormValues } from 'core/models/blog.model';
import { CardComponentProps } from 'core/models/ui.model';
import { PATHS } from 'core/config/constant';
import ButtonComponent from 'ui/button-component';

// The schema definition for validation
const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    content: yup.string().required('Content is required'),
    author: yup.string().required('Author is required'),
    tags: yup.string().required('Tags are required'),
    image: yup.string().required('Image URL is required'), // Corrected validation message
});

/**
 * The `BlogForm` component renders a form for creating or updating a blog post.
 * 
 * This component utilizes `react-hook-form` for form handling and `yup` for validation. 
 * It includes fields for title, image, content, author, and tags of the blog post. It also 
 * provides buttons to submit the form or cancel the action.
 * 
 * @param {CardComponentProps} props - The props for the `BlogForm` component.
 * @param {FormValues} [props.data] - The data of the blog post being edited.
 * 
 * @returns {JSX.Element} The rendered form component.
 */
const BlogForm: React.FC<CardComponentProps> = ({ data }: CardComponentProps): JSX.Element => {
    const router = useRouter();

    // Initialize form handling with react-hook-form and validation schema
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: data || {
            title: '',
            content: '',
            author: '',
            tags: '',
            image: ''
        },
    });

    /**
     * Handles form submission.
     * 
     * Logs the form data to the console. This function would typically send data to an API
     * for saving or updating the blog post.
     * 
     * @param {FormValues} data - The form data to be submitted.
     */
    const onSubmit = (formData: FormValues) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Title"
                                fullWidth
                                variant="outlined"
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="URL of image"
                                fullWidth
                                variant="outlined"
                                error={!!errors.image}
                                helperText={errors.image?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Content"
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                error={!!errors.content}
                                helperText={errors.content?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="author"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Author"
                                fullWidth
                                variant="outlined"
                                error={!!errors.author}
                                helperText={errors.author?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="tags"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Tags (comma separated)"
                                fullWidth
                                variant="outlined"
                                error={!!errors.tags}
                                helperText={errors.tags?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" mt={{ xs: 1, sm: 2, md: 4 }}>
                <ButtonComponent text={data ? "Update" : "Save"} color="success" type="submit" />
                <ButtonComponent text="Cancel" onClick={() => router.push(PATHS.list)} color="primary" />
            </Stack>
        </form>
    );
};

export default BlogForm;