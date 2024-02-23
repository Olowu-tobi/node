const express = require("express");
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.json("This is the homepage");
});

// Login route
router.post("/auth/login", (req, res) => {
  res.json(req.body);
});

module.exports = router;
