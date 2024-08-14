import express from "express";

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello, Welcome to auth service</h1>");
});
export default app;
