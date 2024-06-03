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
      response.send("User data has been received and saved.");
    }
  });
});

/* LOGIN */

app.use(express.json());
interface Account {
  email: string;
  password: string;
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  const sql = "SELECT * FROM account WHERE email = ? AND password = ?";
  db.get(sql, [email, password], (error, account: Account | null) => {
    if (error) {
      console.error("Database error:", error);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    if (account) {
      console.log("Login successful for email:", email);
      res.status(200).json({ message: "OK" });
    } else {
      console.log("Login failed for email:", email);
      res.status(401).json({ message: "Unauthorized" });
    }
  });
});

/* Add to cart */

app.post("/cart", (req, res) => {
  const product = req.body;
  console.log(product.name);

  // First, check if the product already exists in the cart
  db.get(`SELECT * FROM cart WHERE product_id = ?`, product.id, (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Database error");
      return;
    }

    if (row) {
      // If the product exists, update the quantity
      db.run(
        `UPDATE cart SET quantity = quantity + 1 WHERE product_id = ?`,
        product.id,
        function (err) {
          if (err) {
            console.error(err.message);
            res.status(500).send("Database error");
            return;
          }
          res.json({ message: "Product quantity updated" });
        }
      );
    } else {
      // If the product doesn't exist, insert it as a new product
      db.run(
        `INSERT INTO cart (product_id, name, price, img, quantity) VALUES (?, ?, ?, ?, 1)`,
        [product.id, product.name, product.price, product.img],
        function (err) {
          if (err) {
            console.error(err.message);
            res.status(500).send("Database error");
            return;
          }
          res.json({ message: "Product added to cart" });
        }
      );
    }
  });
});

app.get("/cart", (req, res) => {
  db.all(`SELECT * FROM cart`, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Database error");
      return;
    }
    res.json(rows);
  });
});

/* Delete from cart */

/* app.delete("/cart/:id", (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM cart WHERE product_id = ?`, id, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send("Database error");
      return;
    }
    res.json({ message: "Product removed from cart" });
  });
}); */

interface CartItem {
  quantity: number;
}

app.delete("/cart/:id", (req, res) => {
  const id = req.params.id;
  db.get(
    `SELECT quantity FROM cart WHERE product_id = ?`,
    id,
    function (err, row: CartItem | undefined) {
      if (err) {
        console.error(err.message);
        res.status(500).send("Database error");
        return;
      }
      if (row && row.quantity > 1) {
        db.run(
          `UPDATE cart SET quantity = quantity - 1 WHERE product_id = ?`,
          id,
          function (err) {
            if (err) {
              console.error(err.message);
              res.status(500).send("Database error");
              return;
            }
            res.json({ message: "Product quantity reduced by 1" });
          }
        );
      } else if (row && row.quantity === 1) {
        db.run(`DELETE FROM cart WHERE product_id = ?`, id, function (err) {
          if (err) {
            console.error(err.message);
            res.status(500).send("Database error");
            return;
          }
          res.json({ message: "Product removed from cart" });
        });
      } else {
        res.status(404).send("Product not found in cart");
      }
    }
  );
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
