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
import http from "http";
import { Server } from "socket.io";
import contactRouter from "./routes/contactRoutes.js";
const app = express();

let server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
// App Use Default Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// cookie-parser
app.use(cookieParser());

// app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));

app.use(helmet());

// App Use Limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

// Cache
app.set("etag", WEB_CACHE);

// All routes from here
app.use("/api/contact",contactRouter)

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

export const userSoketMap = new Map();

io.on("connection", (socket) => {
  socket.on("register", (userId) => {
    userSoketMap.set(userId, socket.id);
    console.log(userSoketMap);
  });
  socket.on("disconnect", (socket) => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
