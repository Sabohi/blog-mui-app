'use client';

// External dependencies
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'; 

// Internal dependencies
import { FormValues } from 'core/models/blog.model';
import { BlogFormProps } from 'core/models/ui.model';
import { PATHS } from 'core/config/constant';
import ButtonComponent from 'ui/button-component';

// The schema definition for validation
const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    content: yup.string().required('Content is required'),
    author: yup.string().required('Author is required'),
    tags: yup.string().required('Tags are required'),
});


const BlogForm: React.FC<BlogFormProps> = ({ id }) => {
    const router = useRouter();

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h6" gutterBottom>{id}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
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
                <Grid item xs={12}>
                    <Controller
                        name="content"
                        control={control}
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
            <Stack   spacing={{ xs: 1, sm: 2 }} direction="row" mt={{ xs: 1, sm: 2, md: 4 }}>
                <ButtonComponent text={id ? "Update" : "Save"} color="success" type="submit" />
                <ButtonComponent text="Cancel" onClick={() => router.push(PATHS.list)} color="primary" />
            </Stack>
        </form>
    );
};

export default BlogForm;