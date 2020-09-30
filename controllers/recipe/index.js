//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const bcrypt = require("bcryptjs");
const Recipe = require("../../models/recipe");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//INDEX//
router.get("/", auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({username: req.session.username}) 
    res.render("../views/recipes/index.jsx", {recipes});
  } catch (error) {
    console.log(error)
  }
});
//NEW//
router.get("/new", auth, async (req, res) => {
  res.render("../views/recipes/signup.jsx")
})
//DELETE//
//UPDATE//
//CREATE//
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username
  const newRecipe = await Recipe.create(req.body)
  res.redirect("/recipes/")
})
//EDIT//
//SHOW//

// SIGNUP PAGE
router.get("/signup", (req, res) => {
  res.render("auth/signup.jsx");
});

// CREATE NEW USER POST REQUEST
router.post("/signup", async (req, res) => {
  try{
  // ENCRYPT THE PASSWORD
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // SAVE NEW USER IN DB
  const newUser = await User.create(req.body);
  // Redirect to login page
  res.redirect("/auth/login");
} catch (error) {
  console.log(error);
}
});

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("auth/login.jsx");
});

// LOGIN POST REQUEST
router.post("/login", async (req, res) => {
  // FIND USER
  const user = await User.find({ username: req.body.username });

  //CHECK IF USER WAS FOUND
  if (user.length > 0) {
    // COMPARE PASSWORD
    const check = await bcrypt.compare(req.body.password, user[0].password);
    if (check) {
      //SAVE INFO IN SESSION THAT USER IS LOGGEDIN AND USERNAME
      req.session.login = true;
      req.session.username = user[0].username;
      res.redirect("/recipes/");
    } else {
      // Redirect to login page if failed
      res.render("auth/fail.jsx");
    }
  } else {
    // Redirect to login page if failed
    res.render("auth/fail.jsx");
  }
});

//LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
