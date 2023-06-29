// const express = require("express");
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

// routes
// app.get("/", (req, res) => {
//   res.send("Hello from my API");
// });

// Data source
let users = [
  {
    id: 1,
    name: "Simon",
  },
  {
    id: 2,
    name: "Brett",
  },
  {
    id: 3,
    name: "William",
  },
];

// CREATE
app.post('/users', (req, res) => {
  const newUser = {
    name: req.body.name,
    id: Date.now()
  };
  users.push(newUser);
  res.json(newUser);
});

// READ
app.get("/users", (req, res) => {
  res.json(users);
});

// UPDATE
app.put('/users', (req, res) => {
  const { id, name } = req.body;
  users = users.map((user) => {
    if (user.id === id) {
      user.name = name;
    }
    return user;
  });
  res.json(users);
});

// DELETE
app.delete('/users', (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => (user.id !== id));
  res.json(users);
})

// start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
