// external dependencies
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// internal dependencies
import { PaginationComponentProps } from 'core/models/ui.model';

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    page,
    count,
    onPageChange
}) => {
    return (
        <Stack spacing={2}>
        <Pagination
            page={page}
            count={count}
            onChange={(_, newPage) => onPageChange(newPage)}
            color="primary"
            shape="rounded"
        />
        </Stack>
    );
};

export default PaginationComponent;
