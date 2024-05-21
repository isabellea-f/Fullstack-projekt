/* import express, { Request, Response } from "express";
import path from "path";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const db = new sqlite3.Database(path.resolve(__dirname, "test.sqlite"));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// FETCH ALL PRODUCTS
app.get("/product", (req: Request, res: Response) => {
  db.all("SELECT * FROM product", (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Database error");
      return;
    }
    res.json(rows);
  });
});

// FETCH ALL CATEGORIES
app.get("/categories", (req: Request, res: Response) => {
  db.all("SELECT * FROM categories", (err, rows) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Redo på http://localhost:3000");
});
 */

import express, { Request, Response } from "express";
import path from "path";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const db = new sqlite3.Database(path.resolve(__dirname, "test.sqlite"));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// FETCH ALL PRODUCTS
app.get("/product", (req: Request, res: Response) => {
  db.all("SELECT * FROM product", (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Database error");
      return;
    }
    res.json(rows);
  });
});

// FETCH ALL CATEGORIES
app.get("/categories", (req: Request, res: Response) => {
  db.all("SELECT * FROM categories", (err, rows) => {
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

// Catch-all route handler
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Redo på http://localhost:3000");
});
