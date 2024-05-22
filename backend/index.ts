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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

//FORM DATA
app.post("/", (request: Request, response: Response) => {
  const { first_name, last_name, email, password } = request.body;
  const sql = `INSERT INTO account (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
  db.run(sql, [first_name, last_name, email, password], function (err) {
    if (err) {
      console.error(err.message);
      response
        .status(500)
        .send("An error occurred while saving the form data.");
    } else {
      response.send("Form data has been received and saved.");
    }
  });
});

/* LOGIN */

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();

app.use(express.json());

app.post("/login", (request: Request, response: Response) => {
  let db = new sqlite3.Database("./db.sqlite");

  let sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.get(sql, [req.body.email, req.body.password], (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (row) {
      res.send({ message: "Login successful" });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  });

  db.close();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Middleware to serve static files from the dist folder
app.use(express.static(path.join(path.resolve(), "dist")));

// Catch-all route handler
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is ready at http://localhost:3000");
});
