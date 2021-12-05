const express = require("express");
const expressSession = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
require("dotenv").config();

const dishRouter = require("./routers/dish");
const authRouter = require("./middleware/auth");

mongoose.connect("mongodb://127.0.0.1:27017/best-dish-api");

const app = express();
const port = process.env.PORT || 8000;

// Session Configuration
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

if (app.get("env") === "production") {
  session.cookie.secure = true;
  app.set("trust proxy", 1);
}

// Passport Configuration
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

// App Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};

app.get("/user", secured, (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;
  res.render("user", {
    title: "Profile",
    userProfile: userProfile,
  });
});

// Enable routers
app.use(express.json());
app.use(dishRouter);
app.use("/", authRouter); // omit "/"

app.listen(port, () => {
  console.log(`BESTDISH listening at http://localhost:${port}`);
});
