// External dependencies
import { Box, Typography, Paper, Grid, Container } from '@mui/material';

// Internal dependencies
import styles from 'theme/view.module.css';

const ViewBlogPost: React.FC = () => {
    const post = {
        "id": 1,
        "author": "sabohi",
        "title": "Immerse into the Falls",
        "body": "Dummy text",
        "tags": "travel, destinations",
        "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
    };

    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            {`Author: ${post.author}`}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {post.body}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {`Tags: ${post.tags}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={post.image} alt={post.title} className={styles.img} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default ViewBlogPost;