// External dependencies
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

/**
 * `EditBlogLayout` is a React functional component that serves as a layout wrapper
 * for the blog editing page. It includes a toolbar with a title and a container
 * for rendering the children components (like forms or content) in the center.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} The rendered layout with a toolbar and centered content.
 */
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
                        Edit blog post
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