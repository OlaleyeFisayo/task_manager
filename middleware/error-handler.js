const { CustomAPIError } = require("../errors/custom-error");

//the code below is to handle error responses since we passed them to the next function in the async wrapper
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong, please try again` });
};

module.exports = errorHandler;
