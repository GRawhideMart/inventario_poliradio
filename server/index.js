const express = require("express");
const cors = require("cors");

// Database
const db = require("./config/db.config");
const Inventary = require("./models/inventary.model");
(async () => {
  await db.sync({ alter: true });
  console.log("Database synched correctly");
})();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8081",
  })
);

app.use("/api", require("./routes/inventary.routes"));

const PORT = process.env.PORT || 8000;
db.authenticate() // Try to connect to database
  .then(() => {
    // Upon successful promise completion
    console.log("Connection estabilished successfully");
    app.listen(PORT, () => {
      // Start server
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Upon unfulfilled promise, DO NOT start server
    console.error("Couldn't connect to database:", err.message);
  });
