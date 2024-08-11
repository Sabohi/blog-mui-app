// external dependencies
import Box from "@mui/material/Box";

export default function BlogLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <Box>
            {children}
        </Box>
    );
}
