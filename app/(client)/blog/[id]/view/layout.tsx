'use client';

// External dependencies
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Internal dependencies
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButtonWithTooltip from "ui/icon-button";
import { PATHS } from "core/config/constant";

/**
 * `ViewBlogLayout` is a React functional component that provides the layout for
 * viewing a blog post. It includes a container with a header and a section for 
 * displaying the content passed as children.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 * @returns {JSX.Element} The layout component with a header and a section for children.
 */
export default function ViewBlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container maxWidth="lg" sx={{ flex: 1 }}>
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
                        View blog post
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            p: { xs: 0.1, sm: 1 },
                            gap: { xs: 0.1, sm: 1 },
                            flexWrap: 'wrap',
                            overflow: 'auto',
                        }}
                    >
                        <IconButtonWithTooltip
                            icon={ArrowBackIcon}
                            title="Back"
                            size="medium"
                            redirectTo={PATHS.list}
                        />
                    </Box>
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