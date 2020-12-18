const express = require("express");
const db = require("./app/models");

const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
require("./app/routes/user.route.js")(app);
require("./app/routes/quiz.route.js")(app);
require("./app/routes/quizscore.route.js")(app);
require("./app/routes/question.route.js")(app);
require("./app/routes/game.route.js")(app);
require("./app/routes/gameScore.route.js")(app);


// var corsOptions = {
//   origin: "http://localhost:4200"
// };

// app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors());

// parse requests of content-type - application/json

// db.sequelize.sync();
// db
//   .sequelize
//   .query('SET FOREIGN_KEY_CHECKS = 0');
// .then(function (results) {
//   db.sequelize.sync();
// });
// db.sequelize.sync();
//app.use(express.json()); 

// parse requests of content-type - application/x-www-form-urlencoded



const forceSync = async () => {
  await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await db.sequelize.sync();
 // await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'); // setting the flag back for security
};
forceSync();
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});