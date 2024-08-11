// External dependencies
import Button from '@mui/material/Button';

// Internal dependencies
import { ButtonComponentProps } from 'core/models/ui.model';

/**
 * A reusable button component that wraps MUI's `Button` with additional customization.
 * 
 * This component allows for various button configurations including type, color, variant,
 * size, and icon support. It provides a consistent interface for using buttons throughout
 * the application with predefined properties and styling.
 * 
 * @param {ButtonComponentProps} props - The properties for configuring the button.
 * @param {string} props.text - The text to display inside the button.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The type of the button. Defaults to 'button'.
 * @param {'primary' | 'secondary'} [props.color='primary'] - The color of the button. Defaults to 'primary'.
 * @param {'text' | 'outlined' | 'contained'} [props.variant='outlined'] - The variant of the button. Defaults to 'outlined'.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - The size of the button. Defaults to 'medium'.
 * @param {() => void} [props.onClick] - The function to call when the button is clicked.
 * @param {React.ElementType} [props.startIcon] - An optional icon to display at the start of the button.
 * @param {React.ElementType} [props.endIcon] - An optional icon to display at the end of the button.
 * 
 * @returns {JSX.Element} - The rendered button component.
 */
const ButtonComponent: React.FC<ButtonComponentProps> = ({
    text,
    type = "button",
    color = 'primary',
    variant = 'outlined',
    size = 'medium',
    onClick,
    startIcon,
    endIcon
}) => {
    return (
        <Button 
            type={type} 
            onClick={onClick} 
            color={color} 
            variant={variant} 
            size={size} 
            startIcon={startIcon} 
            endIcon={endIcon}
        >
            {text}
        </Button>
    );
};

export default ButtonComponent;