const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// todo: error handling and maybe redo it

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
usersRouter.post("/register", async (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		console.log(data.username);
		const user = await prisma.user.findUnique({
			where: { email: data.email },
		});
		if (user) {
			return res.status(404).json({ error: "User already exists." });
		}
		const newUser = await prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				firstname: data.firstname,
				lastname: data.lastname,
			},
		});
		res.status(201).json({ user: newUser });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = usersRouter;
