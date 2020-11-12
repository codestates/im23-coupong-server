const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();
const port = 3001;

app.use(
  session({
    secret: "@coupong",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hello Coupong!");
});

app.set("port", port);
app.listen(port, () => {
  console.log(`app is listening in PORT ${port}`);
});

module.exports = app;
