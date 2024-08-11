// External dependencies
import { Box, Typography, Paper, Grid, Container } from '@mui/material';

// Internal dependencies
import styles from 'theme/view.module.css';
import { destinations } from 'core/config/data';

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
    // Find the post by ID
    const post = params?.id ? destinations.find((post) => post?.id === Number(params.id)) : null;

    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3 }}>
                {/* Conditional rendering based on whether the post was found */}
                {post ? (
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
                ) : (
                    // Fallback message when no post is found
                    <Typography variant="h6" align="center">
                        No data found for the requested post.
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}

export default ViewPostPage;