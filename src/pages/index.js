import { Login } from "@/components/Login";

/**
 * HomePage component.
 *
 * This component is responsible for rendering the home page of the application.
 * It currently displays the Login component which provides the user with the
 * ability to log in to their account.
 *
 * @return {JSX.Element} The JSX element representing the home page.
 */
export default function HomePage() {
  // Render the Login component on the home page
  return <Login />;
}
