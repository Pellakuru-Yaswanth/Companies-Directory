const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());          // allow React frontend access
app.use(express.json());  // parse JSON


const companies = require("./companies.json");


app.get("/api/companies", (req, res) => {
  res.json(companies);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
