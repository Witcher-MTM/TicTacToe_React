const express = require("express");
const my_routes = require("./routes")
const app = express();

app.use(express.json());

app.use(my_routes);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});