const express = require("express");
const app = express();

app.post("/api/user", (req, res) => {
  res.status(201).json({
    status: "OK",
    data: {
      token: "eydlhglsdhgose7r39uefjldhfd",
    },
    message: "User created successfully",
  });
});

app.post("/api/organization", (req, res) => {
  res.status(201).json({
    status: "OK",
    message: "Organization created successfully",
  });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is listening at: http://localhost:4200`);
});
