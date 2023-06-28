//the code below is to handle a route that is not found in the database
const notFound = (req, res) => res.status(404).send("Route does not exist");

module.exports = notFound;
