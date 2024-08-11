// external dependencies
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

// internal dependencies
import theme from 'theme/theme';
import Footer from "app/components/Footer";
import Header from "app/components/Header";
import { SECTIONS } from "core/constant";

export const metadata: Metadata = {
  title: "Blog App",
  description: "A blog application build with Next.js and material UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                <Header title="Blog" sections={SECTIONS} />
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
}