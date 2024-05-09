import express, { Request, Response } from "express";
import path from "path";
import sqlite3 from "sqlite3";

const app = express();
const db = new sqlite3.Database(path.resolve(__dirname, "test.sqlite"));

// Endpoint to fetch all data from the database
app.get("/categories", (req: Request, res: Response) => {
  db.all("SELECT * FROM product", (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Database error");
      return;
    }
    res.json(rows);
  });
});

// Middleware to serve static files from the dist folder
app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
