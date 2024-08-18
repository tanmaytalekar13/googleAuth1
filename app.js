const express=require('express');
const app=express();
const authRouter=require("./routes/auth")
const expressSession=require("express-session");
require("dotenv").config();
const connectToDB=require('./config/mongoose-connection');
const passport = require('passport');
connectToDB();
require("./config/googleStrategy")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth",authRouter)
app.listen(3000);