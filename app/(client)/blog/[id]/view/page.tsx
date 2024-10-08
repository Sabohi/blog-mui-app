'use client';

// External dependencies
import { Typography, Paper, Grid, Container } from '@mui/material';

// Internal dependencies
import styles from 'theme/view.module.css';
import { useBlogById } from 'core/hooks/useBlogs';

/**
 * `ViewPostPage` is a React functional component that displays a single blog post
 * with its title, author, body content, tags, and an image. It uses Material-UI components
 * for layout and styling. If the post is not found, a "No data found" message is displayed.
 *
 * @component
 * @example
 * return (
 *   <ViewPostPage params={{ id: '1' }} />
 * )
 * @returns {JSX.Element} The component rendering a blog post or a "No data found" message.
 */
function ViewPostPage({ params }: { params: { id: string } }) {
    const { post, isLoading, isError, mutate } = useBlogById(params?.id);

    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            {post?.title}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            {`Author: ${post?.author}`}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {post?.content}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {`Tags: ${post?.tags}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={post?.image} alt={post?.title} className={styles.img} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default ViewPostPage;