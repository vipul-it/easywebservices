const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/logindata");
  console.log("db connected");
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post("/user", async (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

server.get("/User", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

server.put("/user/:id", async (req, res) =>{
 const doc= await User
    .findOneAndReplace(
      { _id: req.params.id },
      { $set: { username: req.body.username } },
      {
        new: true,
      }
    )
    .then((doc) => {
      res.json(doc);
    });
});

server.delete("/user/:id", async (req, res) =>{
 const doc = await User.findByIdAndDelete({ _id: req.params.id })
    res.json(doc);

});

// server.delete("/logindata/:id", async (req, res) =>{
//   const doc = await User.findOne({ _id: req.params.id }).then((doc) => {
//      res.json(doc);
//    });
//  });

server.listen(8081, () => {
  console.log("server started");
});
