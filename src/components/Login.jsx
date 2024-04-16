
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

/**
 * Renders a login/register form and handles the login and signup functionality.
 *
 * @return {JSX.Element} The JSX element representing the login/register form.
 */
export function Login() {
  // Initialize form with default values for email and password
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Use the Supabase client from the context
  const supabase = useSupabaseClient();
  // Use the Next.js router for navigating
  const router = useRouter();

  /**
   * Handles the login process using Supabase's signInWithPassword method.
   * On successful login, it sets the session and redirects to the dashboard.
   */
  const handleLogin = async () => {
    // Extract form values
    const values = form.getValues();
    // Attempt to sign in with the provided email and password
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    // If there's an error, early return
    if (signInError) {
      return;
    }

    // On successful sign in, set the session and redirect to the dashboard
    if (!signInError && data && data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      router.replace("/dashboard");
    }
  };

  /**
   * Handles the signup process using Supabase's signUp method.
   * On successful signup, it sets the session and redirects to the dashboard.
   */
  const handleSignup = async () => {
    // Extract form values
    const values = form.getValues();
    // Attempt to sign up with the provided email and password
    const { data, error: signInError } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });

    // If there's an error, early return
    if (signInError) {
      return;
    }

    // On successful sign up, set the session and redirect to the dashboard
    if (!signInError && data && data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      router.replace("/dashboard");
    }
  };


  return (
    <div>
      <h2>Login/Register</h2>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...form.register("email")} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" {...form.register("password")} />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleSignup}>
        Sign up
      </button>
    </div>
  );
}
