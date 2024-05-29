const { db } = require("../db");
const orderRouter = require("express").Router();

orderRouter.post("/", async (req, res) => {
	try {
		const orderData = req.body;
		console.log(orderData);
		const order = await db.order.create({
			data: {
				user: { connect: { userID: orderData.userID } },
				OrderItem: {
					createMany: {
						data: orderData.products.map((item) => ({
							quantity: item.quantity,
							productID: item.productID,
						})),
					},
				},
				address: orderData.address,
				postalCode: orderData.postalCode,
				city: orderData.city,
				phonenumber: orderData.phonenumber,
			},
		});
		res.status(201).json({ order });
	} catch (error) {
		console.error("Error creating order:", error);
		res.status(500).json({ error: "Failed to create order" });
	}
});

async function createOrder(orderData) {
	try {
		const createdOrder = await db.order.create({
			data: {
				user: { connect: { userID: orderData.userID } },
				OrderItem: {
					createMany: {
						data: orderData.items.map((item) => ({
							quantity: item.quantity,
							productID: item.productID,
						})),
					},
				},
			},
		});

		console.log("Order created:", createdOrder);
	} catch (error) {
		console.error("Error creating order:", error);
	}
}

module.exports = orderRouter;
