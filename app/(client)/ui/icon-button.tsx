// External dependencies 
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation'; 

// Internal dependencies
import { IconButtonWithTooltipProps } from 'core/models/ui.model';

/**
 * A button component with an icon and a tooltip.
 * 
 * This component combines an icon button with a tooltip that displays a title when hovered over.
 * It can optionally navigate to a different route when clicked or execute a custom click handler.
 * 
 * @param {IconButtonWithTooltipProps} props - The properties to configure the icon button with tooltip.
 * @param {React.ElementType} props.icon - The icon component to display inside the button.
 * @param {string} props.title - The title text for the tooltip.
 * @param {() => void} [props.onClick] - Optional callback function to handle button click events.
 * @param {string} [props.redirectTo] - Optional route path to navigate to when the button is clicked.
 * @param {'small' | 'medium' | 'large'} [props.size='small'] - The size of the icon button. Defaults to 'small'.
 * 
 * @returns {JSX.Element} - The rendered icon button with tooltip.
 */
const IconButtonWithTooltip: React.FC<IconButtonWithTooltipProps> = ({
    icon: Icon, 
    title, 
    onClick, 
    redirectTo,
    size='small', 
}) => {
    const router = useRouter();
    
    const handleClick = () => {
        if (redirectTo) {
            router.push(redirectTo);
        }
        if (onClick) {
            onClick(); 
        }
    };

    return (
        <Tooltip title={title} arrow>
            <IconButton onClick={handleClick}>
                <Icon fontSize={size} />
            </IconButton>
        </Tooltip>
    );
};

export default IconButtonWithTooltip;