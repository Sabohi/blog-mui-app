'use client';

// external dependencies
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// internal dependencies
import CardComponent from '@/app/ui/card-component';
import PaginationComponent from '@/app/ui/pagination-component';
import Header from "@/app/ui/header-component";
import { SECTIONS } from "@/app/core/config/constant";
import { Destination } from 'core/models/ui.model';

const destinations: Array<Destination> = [
    {
        "id": 1,
        "title": "Immerse into the Falls",
        "body": "Dummy text",
        "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
    },
    {
        "id": 2,
        "title": "Helicopter Over the Falls",
        "body": "Dummy text",
        "image": "https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
    },
    {
        "id": 3,
        "title": "The Falls at Night",
        "body": "Dummy text",
        "image": "https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/attractions-and-tours/illumination/niagarafalls-illumination-header-desktop.jpg?h=500&w=1500&la=en&hash=123E6D5F1744FBCC74EC36570E77872608D24891g"
    },
    {
        "id": 4,
        "title": "Immerse into the Falls",
        "body": "Dummy text",
        "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
    },
    {
        "id": 5,
        "title": "Show me the Magic",
        "body": "Dummy text",
        "image": "https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg"
    },
];

export default function BlogPage() {
    return (
        <Box>
            <Header title="Travel Blog" sections={SECTIONS} />
            <Grid container spacing={{ xs: 1, sm: 2, md: 5 }}>
                {destinations.map((destination) => (
                    <CardComponent key={destination.id} data={destination} />
                ))}
            </Grid>
            <Box
                display="flex"
                justifyContent="center"
                mt={{ xs: 1, sm: 2, md: 4 }}
            >
                <PaginationComponent 
                    page={1}
                    count={20}
                    onPageChange={() => { console.log("pagination")}}
                />
            </Box>
        </Box>
    );
}