export default function handler(request, response) {
  const { name = 'World' } = request.query;
  
  // Create a JavaScript object for the JSON response
  const jsonResponse = {
    message: `Hello ${name}!`
  };

  // Set the response header to indicate JSON content
  response.setHeader('Content-Type', 'application/json');

  // Send the JSON response
  response.json(jsonResponse);
}
