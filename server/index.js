const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, your server is running!");
});

app.listen(3001, () => console.log("Server is running on port 3001"));
