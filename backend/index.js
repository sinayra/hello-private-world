const express = require("express");
const app = express();
const cors = require("cors");
const port = 3333;

const allowlist = ["http://localhost"];

const corsOptions = {
  origin: allowlist,
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/api", (req, res) => {
  console.log("GET /api");
  res.json({ message: "Hello Private World!" });
});

app.get("/not-reachable", (req, res) => {
  console.log("GET /not-reachable");
  res.json({ message: "Hello Secret World!" });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
