// External dependencies
import React, { useState } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';

// Internal dependencies
import styles from 'theme/card.module.css';
import IconButtonWithTooltip from 'app/ui/icon-button';
import { CardComponentProps } from 'core/models/ui.model';
import { CONTENT_LENGTH } from 'core/config/constant';
import ConfirmationDialog from 'app/ui/confirmation-dialog'; 
import { deleteBlog } from 'core/api/blog';
import { useBlogs, useBlogById } from 'core/hooks/useBlogs';

/**
 * A component that displays a card for a blog post with options to view, edit, or delete.
 * 
 * This component shows the blog post's title, a truncated preview of its content, and an image.
 * It includes interactive buttons for viewing, editing, and deleting the post. A confirmation 
 * dialog appears when the delete button is clicked to confirm the deletion action.
 * 
 * @param {CardComponentProps} props - The properties to configure the card component.
 * @param {Object} props.data - The data for the blog post.
 * @param {number} props.data.id - The unique identifier for the blog post.
 * @param {string} props.data.title - The title of the blog post.
 * @param {string} props.data.content - The content of the blog post.
 * @param {string} props.data.image - The URL of the image associated with the blog post.
 * 
 * @returns {JSX.Element} The rendered card component with interactive buttons and a confirmation dialog.
 */
const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
    const { mutate: mutateBlogs } = useBlogs();
    const { mutate: mutateBlogById } = useBlogById(data?.id); 

    const [dialogOpen, setDialogOpen] = useState(false);

    /**
     * Opens the confirmation dialog for deletion.
     */
    const handleDeleteClick = () => {
        setDialogOpen(true);
    };

    /**
     * Closes the confirmation dialog.
     */
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    /**
     * Confirms the deletion of the blog post and logs the action to the console.
     */
    const handleConfirmDelete = async () => {
        deleteBlog(data?.id, mutateBlogs, mutateBlogById);
        setDialogOpen(false);
    };

    /**
     * Truncates the content to a specified length if it exceeds the maximum length.
     * 
     * @type {string}
     */
    const truncatedContent = (data?.content && data.content.length > CONTENT_LENGTH) ? data.content.substring(0, CONTENT_LENGTH) + '...' : data?.content;

    return (
        <Grid item xs={4} md={3}>
            <Paper
                elevation={3}
                className={styles.paper}
            >
                <Image src={data?.image} alt={data?.title} className={styles.img} />
                <Box
                    sx={{
                        paddingX: 1,
                        flex: 1, 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        mt: 1,
                    }}
                >
                    <Typography variant="subtitle2" component="h2">
                        {data?.title}
                    </Typography>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="body2" component="p" marginTop={0}>
                            {truncatedContent}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            p: { xs: 0.1, sm: 1 },
                            gap: 0.1,
                            flexWrap: 'wrap',
                            overflow: 'auto',
                        }}
                    >
                        <IconButtonWithTooltip
                            icon={VisibilityIcon}
                            title="View blog"
                            redirectTo={`blog/${data?.id}/view`}
                        />
                        <IconButtonWithTooltip
                            icon={EditIcon}
                            title="Edit blog"
                            redirectTo={`blog/${data?.id}/edit`}
                        />
                        <IconButtonWithTooltip
                            icon={DeleteIcon}
                            title="Delete blog"
                            onClick={handleDeleteClick}
                        />
                    </Box>
                </Box>
            </Paper>
            <ConfirmationDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                onConfirm={handleConfirmDelete}
                title="Confirm Deletion"
                message={`Are you sure you want to delete this blog - '${data?.title}'?`}
            />
        </Grid>
    );
};

export default CardComponent;