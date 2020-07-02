const express = require("express");
const app = express();
const cors = require("cors");
const port = 3333;

const allowlist = ["http://localhost:3000"];
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

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
