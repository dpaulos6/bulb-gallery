export default function handler(request, response) {
  const { names = ['John', 'Jane', 'Doe', 'Martim', 'Afonso', 'Nigger'] } = request.query;

  // Create a JavaScript object for the JSON response
  const jsonResponse = {
    // message: `Hello ${names.join(', ')}!`,
    names: names
  };

  // Set the response header to indicate JSON content
  response.setHeader('Content-Type', 'application/json');

  // Send the JSON response
  response.json(jsonResponse);
}
