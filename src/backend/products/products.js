const productRouter = require("express").Router();
const { PrismaClient } = require("@prisma/client");

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
					category: {
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
	const prisma = new PrismaClient();

	try {
		const products = await prisma.product.findMany({
			include: {
				category: true,
			},
		});
		res.status(200).json({ products });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
module.exports = productRouter;
