import { Login } from "@/components/Login";

/**
 * SignUp component responsible for rendering the user registration interface.
 * Currently, this component renders the existing Login component, which may handle both login and signup processes.
 * In the future, this could be expanded to include a dedicated sign-up form or additional logic specific to registration.
 *
 * @return {JSX.Element} The Login component tailored for the signup process.
 */
export default function SignUp() {
  // Render the Login component which can be used for both logging in and signing up users
  return <Login />;
}
