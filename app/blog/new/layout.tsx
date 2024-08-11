// External dependencies
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Internal dependencies
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

/**
 * `NewBlogLayout` is a layout component used to structure the page for creating a new blog post.
 * It provides a container with a header and a space for child components, typically used for forms.
 *
 * @param {Object} props - The props for the `NewBlogLayout` component.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout, 
 *                                           usually a form for creating a blog post.
 * 
 * @returns {JSX.Element} The rendered layout component.
 */
export default function NewBlogLayout({
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
                        Create a new blog post
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
};