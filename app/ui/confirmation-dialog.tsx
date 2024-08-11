// External dependencies
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

// Internal dependencies
import { ConfirmationDialogProps } from 'core/models/ui.model';
import ButtonComponent from '@/app/ui/button-component';

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    open,
    onClose,
    onConfirm,
    title = "Confirm Deletion",
    message = "Are you sure you want to delete this blog?",
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <Typography variant="body2">
                    {message}
                </Typography>
            </DialogContent>
            <DialogActions>
                <ButtonComponent text="Cancel" onClick={onClose} color="primary" size="small" startIcon={<CloseIcon fontSize="small" />} />
                <ButtonComponent text="Confirm" onClick={onConfirm} color="success" size="small" startIcon={<DeleteIcon fontSize="small" />} />
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;