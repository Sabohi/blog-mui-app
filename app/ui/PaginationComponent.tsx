// // external dependencies
// import Grid from '@mui/material/Grid';
// import Pagination from '@mui/material/Pagination';

// export default function PaginationComponent() {
//     return (
//         <Grid item xs={12} md={12}>
//             <Pagination count={10} showFirstButton showLastButton/>
//         </Grid>
//     );
// }


// // components/PaginationComponent.js
// import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const PaginationComponent = ({ page, count, onPageChange }) => {
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

PaginationComponent.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
