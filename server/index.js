const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT= process.env.PORT || 8081;

// Connection mongoDB atlas

  const uri ="mongodb+srv://other-user:otheruser35@cluster0.0fgqy.mongodb.net/easywebservices?retryWrites=true&w=majority";

  mongoose.connect(uri).then(()=>{
    console.log("connected to mongodb atlas");
  });


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
server.post("/api/user", async (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

server.get("/api/user", async (req, res) => {
  const docs = await User.findOne({_id: req.params.id});
  res.json(docs._id);
});

server.get("/user",(req, res) => {
  res.send("hello");
})

server.put("/api/user/:id", async (req, res) => {
  const doc = await User.findOneAndReplace(
    { _id: req.params.id },
    { $set: { username: req.body.username } },
    {
      new: true,
    }
  ).then((doc) => {
    res.json(doc);
  });
});

server.delete("/api/user/:id", async (req, res) => {
  const doc = await User.findByIdAndDelete({ _id: req.params.id });
  res.json(doc);
});

// server.delete("/logindata/:id", async (req, res) =>{
//   const doc = await User.findOne({ _id: req.params.id }).then((doc) => {
//      res.json(doc);
//    });
//  });

server.listen(PORT, () => {
  console.log("server started",PORT);
});
