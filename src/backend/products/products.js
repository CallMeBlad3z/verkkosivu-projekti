const productRouter = require("express").Router();
const { db } = require("../db");

productRouter.post("/", async (req, res) => {
	const { title, price, description, stock, manufacturer, category, userId } =
		req.body;
	const prisma = new PrismaClient();
	try {
		const user = await prisma.user.findUnique({
			where: { userID: userId },
		});
		if (!user || !user.isAdmin) {
			res.status(404).json({
				error: "User not found or user is not allowed to perform this request.",
			});
		} else {
			const product = await prisma.product.create({
				data: {
					title,
					price,
					description,
					stock,
					manufacturer,
					Category: {
						connectOrCreate: {
							where: {
								title: category,
							},
							create: {
								title: category,
							},
						},
					},
				},
			});
			res.status(201).json({ product });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

productRouter.get("/", async (req, res) => {
	try {
		const products = await db.product.findMany({
			include: {
				Category: true,
			},
		});
		res.status(200).json({ products });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
});

productRouter.get("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		const product = await db.product.findUnique({
			where: { productID: id },
			include: {
				Category: true,
			},
		});
		if (!product) {
			res.status(404).json({ error: "Product not found." });
		} else {
			res.status(200).json({ product });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

productRouter.get("/:id", async (req, res) => {
	const prisma = new PrismaClient();
	const id = parseInt(req.params.id);

	try {
		const product = await prisma.product.findUnique({
			where: { productID: id },
			include: {
				Category: true,
			},
		});
		if (!product) {
			res.status(404).json({ error: "Product not found." });
		} else {
			res.status(200).json({ product });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = productRouter;
