module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      //if we are logged in, we will go to the next page which is the dashboard page which is '/dashboard'
      return next();
    } else {
      res.redirect("/"); //else we will be redirected to the login page which is '/'
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      //if we are not logged in, we will go to the next page which is the login page which is '/'
      return next();
    } else {
      res.redirect("/dashboard"); // else we will be redirected to the dashboard page which is '/dashboard'
    }
  },
};
//this is the ensureAuth function we created in middleware/auth.js it means when we click the dashboard button, we will go to the dashboard page, but if we are not logged in, we will be redirected to the login page.
// so ensureAuth is a function that we created to make sure that we are logged in before we can go to the dashboard page. and we will use this function in routes/index.js and ensureGuest is a function that we created to make sure that we are not logged in before we can go to the login page. and we will use this function in routes/auth.js
//the difference between ensureAuth and ensureGuest is that ensureAuth is for the dashboard page and ensureGuest is for the login page. because we write in the ensure
