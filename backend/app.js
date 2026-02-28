import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js";

import contactRouter from "./routes/contactRoutes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Cookie Parser
app.use(cookieParser());

// Body Parser
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));

// Security
app.use(helmet());

// Rate Limiter
const limiter = rateLimit({
  windowMs: REQUEST_TIME,
  max: REQUEST_NUMBER,
});
app.use(limiter);

// Cache
app.set("etag", WEB_CACHE);

// Routes
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.json({
    message: "NODE/EXPRESS IS RUNNING!",
  });
});

// Database Connect
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("MongoDB disconnected");
  });

// Start Server
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});