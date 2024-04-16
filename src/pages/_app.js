import "@/styles/globals.css";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import PropTypes from 'prop-types';

/**
 * MyApp component which wraps the next.js application.
 * 
 * It provides a session context using Supabase for the entire application,
 * ensuring that any component can have access to the session information.
 *
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.Component - The Next.js page or custom component.
 * @param {Object} props.pageProps - The props for the page, including the initial session data.
 * @return {JSX.Element} The MyApp component with session context.
 */
export default function MyApp({ Component, pageProps: { initialSession, ...rest } }) {
  // Initialize the Supabase client for session management.
  const supabaseClient = createPagesBrowserClient();

  // Wrap the incoming Component with the SessionContextProvider to provide
  // session context to the entire application.
  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession}>
      {/* Render the current page's component with all its respective props */}
      <Component {...rest} />
    </SessionContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    initialSession: PropTypes.object,
    // Add other prop types for pageProps if needed
  }).isRequired,
};