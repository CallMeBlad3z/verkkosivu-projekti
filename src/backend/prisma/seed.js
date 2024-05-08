import { PrismaClient } from '@prisma/client'
import process from 'process'
import bcrypt from 'bcrypt'

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
      firstname: 'John',
      lastname: 'Doe',
      password: 'password123',
      isAdmin: true,
    },
  })
  console.log({ johndoe, janedoe })
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