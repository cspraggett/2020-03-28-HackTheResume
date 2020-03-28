const express = require("express");
const { exec } = require("child_process");

const app = new express();

app.get("/", (req, res) => {
  res.sendFile(
    "/Users/christopherspraggett/2020-03-28-HackTheResume/resume.html"
  );
});

exec("resume export resume.html --format html", (error, stdout, stderr) => {
  if (error) {
    console.log(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

app.listen(5000, () => console.log("Listening on 5000"));
