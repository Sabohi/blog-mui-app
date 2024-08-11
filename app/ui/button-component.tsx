// External dependencies
import Button from '@mui/material/Button';

// Internal dependencies
import { ButtonComponentProps } from 'core/models/ui.model';

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    text,
    type="button",
    color='primary',
    variant='outlined',
    size='medium',
    onClick,
    startIcon,
    endIcon
}) => {
    return (
        <Button type={type} onClick={onClick} color={color} variant={variant} size={size} startIcon={startIcon} endIcon={endIcon}>
            {text}
        </Button>
    );
};

export default ButtonComponent;
