const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getAnswer,
  getCoolPeople,
  addCoolPerson,
//   changeName
} = require("./controller");

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/answer", getAnswer);

app.get("/api/coolPeople", getCoolPeople);

app.post("/api/submitCool", addCoolPerson);

// app.put("/api/changeCool", changeName);

app.listen(4000, () => console.log("Server running on 4000"));
