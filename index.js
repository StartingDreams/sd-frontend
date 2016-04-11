/**
 * Created by david on 4/9/16.
 */
// Express
var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    favicon = require("serve-favicon"),
    app = express();

// Environment defaults
env = {
    "port": process.env.FRONTEND_PORT || 3000,
    "environment": process.env.ENVIRONMENT || "development"
};

// Settings
var publicPath = path.join(__dirname, "public");

// Application Setup
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(publicPath));

// Routers
var indexRouter = express.Router();

// Index Routes
indexRouter.route("/")
    .get(function(req, res) {
        res.render("index", {"env": env});
    });

// Routes
app.use("*", indexRouter);

// Start Server
app.listen(env.port, function() {
    console.log("Running in " + env.environment + " on port " + env.port);
});

module.exports = app;