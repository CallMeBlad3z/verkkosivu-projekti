import { useState } from "react";
import { useForm } from "react-hook-form";
import { createAccount } from "../services/auth";
import { useNavigate } from "react-router-dom";
const Register = (handleRegister) => {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState("");
	const navigate = useNavigate();

	const handleAccountCreation = (data) => {
		createAccount(data).then((data) => {
			if (data.user) {
				navigate(`/login`);
			}
		});
	};
	return (
		<div>
			<h1>Register page</h1>
			<p>Register stuff here</p>
			<form onSubmit={handleSubmit((data) => handleAccountCreation(data))}>
				<input {...register("firstname")} placeholder="First name" />
				<input {...register("lastname")} placeholder="First name" />
				<input {...register("email")} placeholder="email" />
				<input {...register("password")} placeholder="password" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Register;
