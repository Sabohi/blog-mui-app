// External dependencies
import Pagination from '@mui/material/Pagination';

// Internal dependencies
import { PaginationComponentProps } from 'core/models/ui.model';

/**
 * A pagination component for navigating through multiple pages of content.
 * 
 * This component utilizes Material-UI's `Pagination` component to display pagination controls. 
 * It handles the current page and the total number of pages and invokes a callback function 
 * when the page changes.
 * 
 * @param {PaginationComponentProps} props - The properties to configure the pagination component.
 * @param {number} props.page - The current page number being displayed.
 * @param {number} props.count - The total number of pages.
 * @param {(page: number) => void} props.onPageChange - Callback function to be called when the page changes.
 * 
 * @returns {JSX.Element} - The rendered pagination component.
 */
const PaginationComponent: React.FC<PaginationComponentProps> = ({
    page,
    count,
    onPageChange
}) => {
    return (
        <Pagination
            page={page}
            count={count}
            onChange={(_, newPage) => onPageChange(newPage)}
            color="primary"
            shape="rounded"
        />
    );
};

export default PaginationComponent;