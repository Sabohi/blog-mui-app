'use client';

// external dependencies
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// internal dependencies
import Card from 'ui/Card';
import PaginationComponent from '@/app/ui/PaginationComponent';

const city = [
    {
        "id": 1,
        "title": "Immerse into the Falls",
        "excerpt": "Dummy text",
        "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
    },
    {
        "id": 2,
        "title": "Helicopter Over the Falls",
        "excerpt": "Dummy text",
        "image": "https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
    },
    {
        "id": 3,
        "title": "The Falls at Night",
        "excerpt": "Dummy text",
        "image": "https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/attractions-and-tours/illumination/niagarafalls-illumination-header-desktop.jpg?h=500&w=1500&la=en&hash=123E6D5F1744FBCC74EC36570E77872608D24891g"
    },
    {
        "id": 4,
        "title": "Immerse into the Falls",
        "excerpt": "Dummy text",
        "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
    },
    {
        "id": 5,
        "title": "Show me the Magic",
        "excerpt": "Dummy text",
        "image": "https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg"
    },
];

export default function BlogPage() {
    return (
        <Box>
            <Grid container spacing={5}>
                {city.map((tour) => (
                <Card tour={tour} />
                ))}
            </Grid>
            <Box
                display="flex"
                justifyContent="center"
                mt={4}
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