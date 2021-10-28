const dotenv = require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const api = require("./routes/api");
const home = require("./routes/home");
const user = require("./routes/account");

const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(
  session({
    secret: "tlzmflt",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/home", home);
app.use("/api", api);
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("<h1>Home 입니다.</h1>");
});

app.listen(PORT, () => console.log(`${PORT}에 연결됨`));
