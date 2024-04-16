/**
 * Deletes a company from the "companies" table in the Supabase database.
 * This function uses the Supabase client to send a delete request to the database.
 * It targets a specific company row by matching the company ID provided.
 *
 * @param {Object} supabase - The Supabase client object to interact with the database.
 * @param {number} id - The unique identifier of the company to be deleted.
 * @return {Promise<void>} A promise that resolves with no value when the delete operation is complete.
 */
export async function deleteCompany(supabase, id) {
  // Sends a delete request to the "companies" table where the "id" column matches the provided id
  await supabase.from("companies").delete().eq("id", id);
}
