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
  const johndoe = await prisma.user.create({
    data: {
      email: 'johndoe@prisma.io',
      firstname: 'John',
      lastname: 'Doe',
      password: 'password123',
      isAdmin: true,
    },
  })
  const janedoe = await prisma.user.create({
    data: {
      email: 'janedoe@prisma.io',
      firstname: 'Jane',
      lastname: 'Doe',
      password: 'password123',
      isAdmin: false,
    },
  })
  const category = await prisma.category.create({
	data: {
		title: 'Sunglasses',
		description: 'Sunglasses for all occasions',
		product: {
		create: {
			title: 'Cool Glasses',
			description: 'These glasses are really cool',
			stock: 100,
			manufacturer: 'RayBan',
			price: 200.00,
			image: 'product-images\\Rectangle 44.png',
			},	
		},
	}
  })
  console.log({ johndoe, janedoe, category})
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
