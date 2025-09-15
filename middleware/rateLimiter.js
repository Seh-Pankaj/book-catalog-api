const rateLimit = require("express-rate-limit");

// Limit to 100 requests per 15 minutes
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  message: { error: "Too many requests, please try again later." },
});

module.exports = rateLimiter;
