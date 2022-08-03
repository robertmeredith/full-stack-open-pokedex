const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001;

// use the 'dist' folder for all routes
app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
