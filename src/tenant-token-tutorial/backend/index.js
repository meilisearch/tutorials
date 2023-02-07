require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MeiliSearch } = require("meilisearch");
const app = express();

const client = new MeiliSearch({
  host: process.env.MEILI_HOST || "http://localhost:7700",
  apiKey: process.env.MEILI_API_KEY || "masterKey",
});

app.use(cors());

app.get("/", function (req, res) {
  return res.send("Tenant Token demo");
});

app.get("/create-tenant-token", async (req, res) => {
  const { value: patientName } = req.query;

  /* Add functionality to create Tenant token */
});

const port = process.env.PORT || 5001;

app.listen(port, async () => {
  console.log(`Server started at PORT: ${port}`);
});
