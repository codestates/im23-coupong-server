const express = require("express");
const router = express.Router();

const { usersController } = require("../controller");

// * POST /users/signin
router.post("/signin", usersController.signin.post);

// * POST /users/signout
router.post("/signout", usersController.signout.post);

// * POST /users/signup
router.post("/signup", usersController.signup.post);

// * GET /users/userinfo
router.get("/userinfo", usersController.userinfo.get);

// * DELETE /users/userSecession/:user_id
router.delete("/userSecession/:user_id", usersController.userSecession.delete);

// * PUT /users/userChange/:user_id
router.put("/userChange/:user_id", usersController.userChange.put);

module.exports = router;
