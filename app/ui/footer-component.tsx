// External dependencies
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Internal dependencies
import { FooterProps } from 'core/models/ui.model';

/**
 * Displays a copyright notice.
 * 
 * @returns {JSX.Element} - The rendered copyright notice.
 */
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.internationalsos.com/">
                The Subuhi Log 
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

/**
 * Footer component that displays a title, description, and a copyright notice.
 * 
 * This component is typically used at the bottom of the page to provide information
 * about the website and a copyright notice.
 * 
 * @param {FooterProps} props - The properties to configure the footer.
 * @param {string} props.description - A brief description or tagline to display in the footer.
 * @param {string} props.title - The title or main heading to display in the footer.
 * 
 * @returns {JSX.Element} - The rendered footer component.
 */
export default function Footer(props: FooterProps) {
    const { description, title } = props;

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
};