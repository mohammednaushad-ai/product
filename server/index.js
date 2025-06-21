const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./db");
ConnectToMongo();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 7005;

app.use("/product", require("./routes/user_routes"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  //   console.log("Server is listening on port " + PORT);
});
