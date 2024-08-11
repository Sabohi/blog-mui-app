'use client';

// external dependencies
import {
    // createTheme,
    Grid,
    Paper,
    Rating,
    // ThemeProvider,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// internal dependencies
import styles from "theme/card.module.css";
import IconButtonWithTooltip from "ui/IconButtonWithTooltip";

// const theme = createTheme({
//     components: {
//         MuiTypography: {
//         variants: [
//             {
//                 props: {
//                     variant: "body2",
//                 },
//                 style: {
//                     fontSize: 11,
//                 },
//             },
//             {
//                 props: {
//                     variant: "body3",
//                 },
//                 style: {
//                     fontSize: 9,
//                 },
//             },
//         ],
//         },
//     },
// });

export default function Card({ tour }) {
    return (
        <Grid item xs={4} md={3}>
        {/* <ThemeProvider theme={theme}> */}
            <Paper elevation={3} className="paper">
                <img src={tour.image} alt="" className={styles.img} />
                <Box
                    sx={{
                        paddingX: 1,
                    }}
                >
                    <Typography variant="subtitle2" component="h2">
                        {tour.title}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                        }}
                    >
                        <Typography variant="body2" component="h2" marginTop={0}>
                            {tour.excerpt}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            p: { xs: 0.1, sm: 1 }, 
                            gap: { xs: 0.1, sm: 1 }, 
                            flexWrap: 'wrap', 
                            overflow: 'auto'
                        }}
                    >
                        <IconButtonWithTooltip
                            icon={VisibilityIcon}
                            title="View"
                            redirectTo={`blog/${tour.id}/view`}
                        />
                        <IconButtonWithTooltip
                            icon={EditIcon}
                            title="Edit"
                            redirectTo={`blog/${tour.id}/edit`}
                        />
                        <IconButtonWithTooltip
                            icon={DeleteIcon}
                            title="Delete"
                            onClick={() => { console.log("delete blog")}}
                        />
                    </Box>
                </Box>
            </Paper>
        {/* </ThemeProvider> */}
        </Grid>
    );
}