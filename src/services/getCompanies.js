/**
 * Retrieves a list of companies from the "companies" table in the Supabase database.
 * This function assumes that the Supabase client is properly configured and authenticated.
 *
 * @param {Object} supabase - The Supabase client object used to interact with the database.
 * @return {Promise<Array>} A promise that resolves to an array of company objects.
 */
export async function getCompanies(supabase) {
  // Use the Supabase client to query the "companies" table and select all columns
  const { data: companies, error } = await supabase.from("companies").select("*");

  // If there was an error in fetching data, throw an error
  if (error) {
    throw new Error('Error retrieving companies: ' + error.message);
  }

  // Return the list of companies
  return companies;
}
