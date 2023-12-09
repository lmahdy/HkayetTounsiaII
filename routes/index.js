const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth"); //../ means go back one folder

const Story = require("../models/Story");

// @desc    Login/Landing page
// @route   GET /
router.get("/", ensureGuest, (req, res) => {
  // meanning: when we go to /, we will see 'login'
  res.render("login", {
    layout: "login",
  }); // render the login page the one we created in views folder because we set the views folder in app.js
});

// @desc    Dashboard
// @route   GET /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
  // meanning: when we go to /dashboard, we will see 'Dashboard'
  try {
    const stories = await Story.find({ user: req.user.id }).lean();
    res.render("dashboard", {
      name: req.user.firstName,
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
