const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5001;

const mongoUrl = "mongodb://mongo:27017";
const client = new MongoClient(mongoUrl);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("shop");
  console.log("Connected to MongoDB");
}

app.get("/products", async (req, res) => {
  const products = await db.collection("products").find().toArray();
  res.json(products);
});

app.get("/seed", async (req, res) => {
  await db.collection("products").insertMany([
    { name: "Laptop", price: 50000 },
    { name: "Keyboard", price: 2000 }
  ]);
  res.send("Data inserted");
});

connectDB();

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
