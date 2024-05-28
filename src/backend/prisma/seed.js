const { PrismaClient } = require("@prisma/client");
const process = require("process");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient().$extends({
	query: {
		user: {
			$allOperations({ operation, args, query }) {
				if (["create", "update"].includes(operation) && args.data["password"]) {
					args.data["password"] = bcrypt.hashSync(args.data["password"], 10);
				}
				return query(args);
			},
		},
	},
});
// Seed the database with some users and products
async function main() {
	const user1 = await prisma.user.create({
		data: {
			email: "johndoe@prisma.io",
			firstname: "John",
			lastname: "Doe",
			password: "password123",
			isAdmin: true,
		},
	});
	const user2 = await prisma.user.create({
		data: {
			email: "janedoe@prisma.io",
			firstname: "Jane",
			lastname: "Doe",
			password: "password123",
			isAdmin: false,
		},
	});
	const category = await prisma.category.createMany({
		data: [
			{
				title: "Bikes",
				description: "Bikes for all terrains, from mountain bikes to city bikes.",
			},
			{
				title: "Processors",
				description: "atk jee",
			},
			{
				title: "Laptops",
				description: "Ebin atk",
			},
			{
				title: "Real computers",
				description: "atk jee",
			},
		],
	});
	const products = await prisma.product.createMany({
		data: [
			{
				title: "Stoic 4",
				description: "A phenomenal trail bike with no added squishy bits. The bike is available in two different colors: white, gold and red.",
				stock: 50,
				manufacturer: "Canyon",
				price: 1900.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 1,
			},
			{
				title: "Helkama E-Jääkäri 7V",
				description: "An electric bike with a powerful motor that can take you anywhere you want to go. The bike is equipped with a 7-speed Shimano gear system and hydraulic disc brakes. The bike is available in two different colors: olive green, brown and blue.",
				stock: 100,
				manufacturer: "Helkama",
				price: 2799.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 1,
			},
			{
				title: "AMD rytsölä",
				description: "amd > intell",
				stock: 100,
				manufacturer: "MAD",
				price: 300.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 2,
			},
			{
				title: "Intel Pentium 4",
				description: "romu",
				stock: 100,
				manufacturer: "Intel",
				price: 20.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 2,
			},
			{
				title: "Laptop 1",
				description: "Powerful laptop for all your needs",
				stock: 50,
				manufacturer: "Dell",
				price: 1500.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 3,
			},
			{
				title: "Laptop 2",
				description: "Sleek and lightweight laptop",
				stock: 30,
				manufacturer: "Apple",
				price: 2000.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 3,
			},
			{
				title: "PC 1",
				description: "Powerful desktop computer",
				stock: 20,
				manufacturer: "HP",
				price: 1000.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 4,
			},
			{
				title: "PC 2",
				description: "Gaming desktop computer",
				stock: 10,
				manufacturer: "Alienware",
				price: 2000.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 4,
			},
		],
	});
	console.log({ user1, user2, category, products });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
