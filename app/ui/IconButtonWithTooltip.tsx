// external dependencies 
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation'; 

const IconButtonWithTooltip = ({ icon: Icon, title, size="small", onClick, redirectTo }) => {
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

IconButtonWithTooltip.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.string,
    onClick: PropTypes.func,
    redirectTo: PropTypes.string,
};

export default IconButtonWithTooltip;