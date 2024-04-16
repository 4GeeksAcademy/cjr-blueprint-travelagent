// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * This is the API route handler for the "/api/hello" endpoint.
 * 
 * It responds with a JSON object that includes a greeting to a user with the name "John Doe".
 *
 * @param {NextApiRequest} req The Next.js API request object.
 * @param {NextApiResponse} res The Next.js API response object.
 * @returns nothing as it sends the response to the client.
 */
export default function handler(req, res) {
  // Set the status code to 200 (OK) and send the response with a JSON payload
  res.status(200).json({ name: "John Doe" });
}
