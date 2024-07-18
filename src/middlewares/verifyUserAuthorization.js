const AppError = require("../utils/AppError");

function verifyUserAuthorization(verify) {
  return (req, res, next) => {
    const { role } = req.users;

    if (role !== roleToVerify) {
      throw new AppError("Unauthorized", 401);
    }

    return next;
  };
}
