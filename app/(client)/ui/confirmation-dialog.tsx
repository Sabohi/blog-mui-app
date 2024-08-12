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
import ButtonComponent from 'app/ui/button-component';

/**
 * A confirmation dialog used to prompt the user for confirmation before performing an action, such as deletion.
 * 
 * This component displays a modal dialog with a title, a message, and two action buttons: Cancel and Confirm.
 * It allows the user to confirm or cancel an action.
 * 
 * @param {ConfirmationDialogProps} props - The properties to configure the confirmation dialog.
 * @param {boolean} props.open - A boolean indicating whether the dialog is open or not.
 * @param {() => void} props.onClose - A callback function to be called when the dialog is closed.
 * @param {() => void} props.onConfirm - A callback function to be called when the user confirms the action.
 * @param {string} [props.title="Confirm Deletion"] - The title to display at the top of the dialog.
 * @param {string} [props.message="Are you sure you want to delete this blog?"] - The message to display in the dialog body.
 * 
 * @returns {JSX.Element} - The rendered confirmation dialog.
 */
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