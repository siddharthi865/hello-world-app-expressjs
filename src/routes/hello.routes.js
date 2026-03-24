import express from "express";

const router = express.Router();

// GET /api/hello
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, World!",
  });
});

export default router;
