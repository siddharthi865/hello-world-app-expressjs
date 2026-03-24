import rateLimit from "express-rate-limit";
import express from "express";
import helmet from "helmet";
import cors from "cors";

import errorHandler from "./middleware/error.middleware.js";
import helloRoutes from "./routes/hello.routes.js";

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());

// Rate Limiting
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
);

// Body Parser
app.use(express.json());

// Routes
app.use("/api/hello", helloRoutes);

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Error Handler
app.use(errorHandler);

export default app;
