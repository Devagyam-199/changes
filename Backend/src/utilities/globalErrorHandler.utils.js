import customError from "./apiError.utils.js";

const globalErrorHandler = async (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default globalErrorHandler;
