const express = require('express');
const router=express.Router();
const {googleOauth}=require("../controllers/authController");
const passport=require("passport");

router.get('/google',passport.authenticate("google",{scope:["profile"]}))
module.exports = router