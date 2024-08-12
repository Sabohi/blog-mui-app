import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderComponent: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <CircularProgress />
        </Box>
    );
};

export default LoaderComponent;