const express = require("express");
const cors = require("cors");
const app = express();
const registerRouter = require("./auth/user");
app.use(cors());
app.use(express.json());
// controller

app.get("/", (req, res) => {
	return res.json({ message: "moicculi moi" });
});

app.use("/api", registerRouter);
module.exports = app;
