const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const { db, excludeFields } = require("../db");

// todo: error handling and maybe redo it

usersRouter.post("/register", async (req, res) => {
	try {
		const data = req.body;
		const user = await db.user.findUnique({
			where: { email: data.email },
		});
		if (user) {
			return res.status(404).json({ error: "User already exists." });
		}
		const newUser = await db.user.create({
			data: {
				email: data.email,
				password: data.password,
				firstname: data.firstname,
				lastname: data.lastname,
				isAdmin: data.isAdmin,
			},
		});
		const filteredUser = excludeFields(newUser, ["password"]);
		res.status(201).json({ user: filteredUser });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

usersRouter.post("/login", async (req, res) => {
	try {
		const data = req.body;
		console.log("kirjaudutaan...", data.email);
		const user = await db.user.findUnique({
			where: { email: data.email },
		});
		if (!user) {
			return res.status(404).json({ error: "User not found." });
		}
		const passwordMatch = bcrypt.compareSync(data.password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ error: "Invalid password." });
		}
		const filteredUser = excludeFields(user, ["password"]);
		res.status(200).json({ user: filteredUser });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = usersRouter;
