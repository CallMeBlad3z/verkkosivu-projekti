const productRouter = require("express").Router();
const { PrismaClient } = require("@prisma/client");

productRouter.post("/", async (req, res) => {
	const { title, price, description, stock, manufacturer, category } = req.body;
	const prisma = new PrismaClient();
	try {
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
							description,
						},
						create: {
							title: category,
							description,
						},
					},
				},
			},
		});
		res.status(201).json({ product });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = productRouter;
