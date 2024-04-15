import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000;

app.get("/api", (req, res) => {
  res.send("Hello Attica");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
