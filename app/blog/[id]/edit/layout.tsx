// export default function Page({ params }: { params: { id: string } }) {
//     return <div>New: {params.id}</div>
// }
// External dependencies
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Internal dependencies
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function EditBlogLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <Container maxWidth="md" sx={{ flex: 1 }}>
            <Box>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        Edit bog post
                    </Typography>
                </Toolbar>
                <Box
                    display="flex"
                    justifyContent="center"
                    mt={{ xs: 1, sm: 2, md: 4 }}
                >
                    {children}
                </Box>
            </Box>
        </Container>
    );
}