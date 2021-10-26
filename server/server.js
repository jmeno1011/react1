const express = require("express");
const app = express();
const api = require("./routes/api");
const home = require("./routes/home");
const user = require("./routes/route");
const cors = require("cors");
const PORT = process.env.PORT || 8001;

app.use(cors());

app.use("/home", home);
app.use("/api", api);
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("<h1>Home 입니다.</h1>");
});

app.listen(PORT, () => console.log(`${PORT}에 연결됨`));
