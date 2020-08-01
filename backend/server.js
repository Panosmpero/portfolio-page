const express = require("express");
const { urlencoded } = require("express");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(helmet());

app.use("/api/submit", routes);

app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
