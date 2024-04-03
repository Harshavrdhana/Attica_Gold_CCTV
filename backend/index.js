import express from "express";

import path from "path";
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/templates/index.html"));
});

app.listen(8000, () => console.log("Server listening to port 5000"));
