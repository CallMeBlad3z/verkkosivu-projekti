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
				title: "Sunglasses",
				description: "Sunglasses for all occasions",
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
				title: "Cool Glasses",
				description: "These glasses are really cool",
				stock: 100,
				manufacturer: "RayBan",
				price: 200.0,
				image: "product-images\\Rectangle 44.png",
				categoryID: 1,
			},
			{
				title: "Even cooler glasses",
				description: "These glasses are even cooler",
				stock: 100,
				manufacturer: "Maken lasipaja",
				price: 300.0,
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
