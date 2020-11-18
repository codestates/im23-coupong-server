const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const usersRouter = require("./routes/users");
const stampsRouter = require("./routes/stamps");
const ticketsRouter = require("./routes/tickets");

const app = express();
const port = 3001;

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
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
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hello Coupong!");
});

app.use("/users", usersRouter);
app.use("/stamps", stampsRouter);
app.use("/tickets", ticketsRouter);

app.set("port", port);
app.listen(port, () => {
  console.log(`app is listening in PORT ${port}`);
});

module.exports = app;
