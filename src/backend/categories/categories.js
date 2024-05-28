const categoriesRouter = require("express").Router();
const { db, PrismaClient } = require("../db.js");

categoriesRouter.get("/", async (req, res) => {
	try {
		const categories = await db.category.findMany({
			include: {
				product: true,
			},
		});
		res.status(200).json({ categories });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: error.message });
	}
});

categoriesRouter.get("/:id", async (req, res) => {
	const categoriesID = parseInt(req.params.id);
	try {
		const category = await db.category.findUnique({
			where: { categoryID: categoriesID },
			include: {
				product: true,
			},
		});
		res.status(200).json({ category });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = categoriesRouter;
