const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// routes
app.use(require("./routes/api.js"));
app.use(require('./routes/homeRoutes.js'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
