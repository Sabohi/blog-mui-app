// external dependencies
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

// Internal dependencies
import theme from 'theme/theme';
import Footer from "@/app/ui/footer-component";

/**
 * Metadata for the application.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "Blog App",
  description: "A blog application built with Next.js and Material UI",
};

/**
 * RootLayout is the top-level layout component for the application.
 * It provides a consistent layout structure with theming, styling, and routing.
 * 
 * This component includes:
 * - ThemeProvider: Applies the Material-UI theme.
 * - CssBaseline: Provides a consistent baseline of styles.
 * - AppRouterCacheProvider: Handles caching for the Next.js App Router.
 * - Box: A container with flexible layout capabilities.
 * - Container: Centers and constrains content width.
 * - Footer: Renders the footer section at the bottom of the page.
 * 
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * 
 * @returns {JSX.Element} - The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  /** The content to be rendered within the layout. */
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
              }}  
            >
              <Container maxWidth="lg" sx={{ flex: 1 }}>
                {children}
              </Container>
              <Footer
                title="Come before the travel, stay for the awareness"
                description="Welcome! The Subuhi log is a daily updates site for all. We cover everything from travel destinations to health to security. Thank you for reading." 
              />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};