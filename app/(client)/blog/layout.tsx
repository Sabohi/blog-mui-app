// External dependencies
import Container from "@mui/material/Container";

/**
 * `BlogLayout` is a React functional component that serves as a layout wrapper
 * for the blog page. 
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} The rendered layout with a toolbar and centered content.
 */
export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container maxWidth="lg" sx={{ flex: 1 }}>
            {children}
        </Container>
    );
};