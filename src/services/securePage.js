// src/services/securePage.js
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

/**
 * A higher-order component that wraps a given page component and ensures user authentication.
 *
 * If the user is not authenticated, it redirects to the homepage. It also renders nothing while loading the session state.
 *
 * @param {React.ComponentType} Page - The page component to be rendered securely.
 * @return {React.ComponentType} The secure page component with authentication check.
 */
export function securePage(Page) {
  // The wrapper component that will enforce authentication
  return () => {
    // Utilize the session context to manage authentication state
    const { isLoading, session } = useSessionContext();
    // Router for navigation purposes
    const router = useRouter();

    // Effect hook to handle the authentication logic on component mount and updates
    useEffect(() => {
      // If not loading and no session exists, redirect to the homepage
      if (!isLoading && !session) {
        router.replace("/");
      }
    }, [isLoading, session, router]);

    // Render nothing while the authentication state is loading
    if (isLoading) {
      return null;
    }

    // If no session is found, render nothing (user is not authenticated)
    if (!session) {
      return null;
    }

    // If the user is authenticated, render the provided page component
    return <Page />;
  };
}
