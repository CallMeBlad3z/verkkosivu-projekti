const categoriesRouter = require('express').Router();
const { PrismaClient } = require('@prisma/client');

categoriesRouter.get('/', async (req, res) => {
    const prisma = new PrismaClient();
    try {
        const categories = await prisma.category.findMany({
        include: {
            product: true,
        },
        });
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

categoriesRouter.get('/:id', async (req, res) => {
    const prisma = new PrismaClient();
    const categoriesID = parseInt(req.params.id);
    try {
        const category = await prisma.category.findUnique({
            where: { categoriesID },
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