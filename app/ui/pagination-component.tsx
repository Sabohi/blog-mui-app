// external dependencies
import Pagination from '@mui/material/Pagination';

// internal dependencies
import { PaginationComponentProps } from 'core/models/ui.model';

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    page,
    count,
    onPageChange
}) => {
    return (
        <Pagination
            page={page}
            count={count}
            onChange={(_, newPage) => onPageChange()}
            color="primary"
            shape="rounded"
        />
    );
};

export default PaginationComponent;
