// external dependencies 
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation'; 

// internal dependencies
import { IconButtonWithTooltipProps } from 'core/models/ui.model';

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