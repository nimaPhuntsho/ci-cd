import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("this changes are made by nima, submited for pr ");

  res.send({ message: "docker file" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Listening on port ${3000}`);
});
