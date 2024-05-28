const express = require("express");
const cors = require("cors");
const app = express();
const registerRouter = require("./auth/user");
const productRouter = require("./products/products");
const categoriesRouter = require("./categories/categories");
const orderRouter = require("./order/order");
app.use(cors());
app.use(express.json());
// controller

app.get("/", (req, res) => {
	return res.json({ message: "moicculi moi" });
});

app.use("/api", registerRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/order", orderRouter);
module.exports = app;
