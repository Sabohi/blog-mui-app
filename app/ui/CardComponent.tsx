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
import IconButtonWithTooltip from 'ui/IconButtonWithTooltip';
import { CardComponentProps } from 'core/models/ui.model';
import ConfirmationDialog from 'ui/ConfirmationDialog'; 

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDeleteClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        console.log('Deleting blog:', data.title);
        setDialogOpen(false);
    };

    return (
        <Grid item xs={4} md={3}>
            <Paper elevation={3} className="paper">
                <img src={data?.image} alt="Destination Image" className={styles.img} />
                <Box
                    sx={{
                        paddingX: 1,
                    }}
                >
                    <Typography variant="subtitle2" component="h2">
                        {data.title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Typography variant="body2" component="h2" marginTop={0}>
                            {data.body}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            p: { xs: 0.1, sm: 1 },
                            gap: { xs: 0.1, sm: 1 },
                            flexWrap: 'wrap',
                            overflow: 'auto',
                        }}
                    >
                        <IconButtonWithTooltip
                            icon={VisibilityIcon}
                            title="View"
                            redirectTo={`blog/${data.id}/view`}
                        />
                        <IconButtonWithTooltip
                            icon={EditIcon}
                            title="Edit"
                            redirectTo={`blog/${data.id}/edit`}
                        />
                        <IconButtonWithTooltip
                            icon={DeleteIcon}
                            title="Delete"
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
                message={`Are you sure you want to delete '${data.title}'?`}
            />
        </Grid>
    );
};

export default CardComponent;