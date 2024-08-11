// Internal dependencies
import BlogPage from './blog/page';

/**
 * Page component renders the main content of the application.
 * 
 * This component serves as a wrapper for the BlogPage component.
 * It uses a `<main>` element to provide a semantic structure to the page.
 * 
 * @returns {JSX.Element} - The rendered  component containing the BlogPage component.
 */
export default function Page(): JSX.Element {
  return (
    <main>
      <BlogPage />
    </main>
  );
};