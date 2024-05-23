import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login({ handleLogin }) {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState("");

	//
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit((data) => handleLogin(data))}>
				<input {...register("email")} placeholder="email" />
				<input {...register("password")} placeholder="password" />
				<input type="submit" />
			</form>
		</div>
	);
}
