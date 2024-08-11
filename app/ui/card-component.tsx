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

// Internal dependencies
import styles from 'theme/card.module.css';
import IconButtonWithTooltip from '@/app/ui/icon-button';
import { CardComponentProps } from 'core/models/ui.model';
import { CONTENT_LENGTH } from 'core/config/constant';
import ConfirmationDialog from '@/app/ui/confirmation-dialog'; 

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDeleteClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        console.log('Deleting blog:', data?.title);
        setDialogOpen(false);
    };

    const truncatedContent = (data?.content && data.content.length > CONTENT_LENGTH) ? data.content.substring(0, CONTENT_LENGTH) + '...' : data?.content;

    return (
        <Grid item xs={4} md={3}>
            <Paper
                elevation={3}
                className={styles.paper}
            >
                <img src={data?.image} alt={data?.title} className={styles.img} />
                <Box
                    sx={{
                        paddingX: 1,
                        flex: 1, // Make sure the content area takes up remaining space
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="subtitle2" component="h2">
                        {data?.title}
                    </Typography>
                    <Box
                        sx={{
                            flex: 1, // Allow content area to grow and fill space
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