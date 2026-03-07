const { status } = require("http-status")

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(status.FORBIDDEN).json({
         message: "You don't have access of this page!"
    });
  }
};