export default function handler(request, response) {
  const { 
    status = 'success', 
    message = 'API request successful', 
    data = { 
      key1: 'Hotel transylvania', 
      key2: 'Hotel fucking niggers',
      key3: 'Hotel batata'
    } 
  } = request.query;

  const jsonResponse = {
    message: status, message, data
  };

  // Set the response header to indicate JSON content
  response.setHeader('Content-Type', 'application/json');

  // Send the JSON response
  response.json(jsonResponse);
}
