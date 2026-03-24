import request from "supertest";

import app from "../src/app.js";

describe("Hello API", () => {
  it("should return Hello World message", async () => {
    const res = await request(app).get("/api/hello");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello, World!");
  });
});
