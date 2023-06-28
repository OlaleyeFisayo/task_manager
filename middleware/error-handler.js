//the code below is to handle error responses since we passed them to the next function in the async wrapper
const errorHandler = (err, req, res, next) => {
  res.status(err.status).json({ msg: err.message });
};

module.exports = errorHandler;
