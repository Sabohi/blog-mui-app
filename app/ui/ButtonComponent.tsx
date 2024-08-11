// External dependencies
import Button from '@mui/material/Button';

// Internal dependencies
import { ButtonComponentProps } from 'core/models/ui.model';

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    onClick,
    text,
    color='primary',
    variant='outlined',
    size='small',
    startIcon,
    endIcon
}) => {
    return (
        <Button onClick={onClick} color={color} variant={variant} size={size} startIcon={startIcon} endIcon={endIcon}>
            {text}
        </Button>
    );
};

export default ButtonComponent;
