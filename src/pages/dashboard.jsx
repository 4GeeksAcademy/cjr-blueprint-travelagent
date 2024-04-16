// src/pages/dashboard.jsx
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { securePage } from "@/services/securePage";
import { useEffect, useState } from "react";
import { getCompanies } from "@/services/getCompanies";
import { deleteCompany } from "@/services/deleteCompany";

export default securePage(function Dashboard() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies(supabase).then(setCompanies);
  }, []);

/**
 * Signs the user out of the application.
 *
 * This function makes an asynchronous call to sign out the current user
 * using the supabase authentication API. After signing out, it redirects
 * the user to the homepage using Next.js router.
 *
 * @return {Promise<void>} A promise that resolves when the sign out process
 *                         is complete and the user is redirected.
 */
const handleSignOut = async () => {
  // Sign out the current user
  await supabase.auth.signOut();

  // Redirect to the homepage after signing out
  router.push("/");
};

/**
 * Returns an async function that deletes a company with the given ID using the provided Supabase client.
 *
 * @param {number} id - The ID of the company to delete.
 * @return {Promise<void>} A Promise that resolves when the company is successfully deleted.
 */
  const handlerDelete = (id) => async () => {
    await deleteCompany(supabase, id);
  };

/**
 * Renders the Dashboard component with user information, a sign out button, and a list of companies.
 * Each company is displayed with a delete button to remove it from the list.
 *
 * @returns {JSX.Element} The Dashboard component.
 */
  return (
    <div>
      Dashboard for <strong>{user?.email || "Not authenticated"}</strong>
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
      <ul>
        {companies.map((company, index) => (
          <li key={company.id}>
            {company.name}{" "}
            <button type="button" onClick={handlerDelete(company.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
