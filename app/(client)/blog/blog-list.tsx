'use client';

// external dependencies
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// internal dependencies
import CardComponent from 'app/ui/card-component';
import PaginationComponent from 'app/ui/pagination-component';
import { ITEMS_PER_PAGE, SECTIONS } from "core/config/constant";
import Header from "app/ui/header-component";
import { Destination } from 'core/models/ui.model';

/**
 * The `BlogPage` component displays a list of blog destinations with pagination controls.
 * 
 * It utilizes the `Header` component to show the page header and `CardComponent` 
 * to display each blog destination. Pagination is managed to handle multiple pages of 
 * content and is controlled by the `PaginationComponent`.
 * 
 * @returns {JSX.Element} The rendered blog page component.
 */
export default function BlogList({ destinations }: { destinations: Array<Destination> }) {

    const [currentPage, setCurrentPage] = useState<number>(1);

    /**
     * Handles the page change event.
     * 
     * Updates the `currentPage` state to the new page number when the pagination changes.
     * 
     * @param {number} page - The new page number to set.
     */
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Calculate the total number of pages based on the number of destinations and items per page
    const totalPages = Math.ceil(destinations?.length / ITEMS_PER_PAGE);

    // Slice the destinations array to get the items for the current page
    const currentItems = destinations?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE, 
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <Box>
            <Header title="Travel Blog" sections={SECTIONS} />
            <Grid container spacing={{ xs: 1, sm: 2, md: 5 }}>
                {currentItems?.map((destination) => (
                    <CardComponent key={destination?.id} data={destination} />
                ))}
            </Grid>
            <Box
                display="flex"
                justifyContent="center"
                mt={{ sm: 2, md: 4 }}
            >
                <PaginationComponent 
                    count={totalPages}
                    page={currentPage}
                    onPageChange={handlePageChange}
                />
            </Box>
        </Box>
    );
};