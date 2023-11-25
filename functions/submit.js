module.exports = (req, res) => {
  const data = req.body; // Access data sent in the request body

  // Perform any necessary logic, e.g., save data to a database

  res.json({ message: 'Serverless function called!', data });
};
