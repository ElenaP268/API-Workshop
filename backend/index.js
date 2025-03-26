// server/index.js

const express = require("express");
const User = require("./config");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// sample APIs to test database
app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  await User.add({ 
    name: req.body.name,
   });
  res.send({ msg: "User Added" });
});

app.put("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.delete("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});