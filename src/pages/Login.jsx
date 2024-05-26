import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login({ handleLogin }) {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState("");

	//
	return (
		<div className="containerLog">
			<div className="boxLog">
				<div className="item1Log">
					<h1>Kirjaudu sisään</h1>
				</div>
				<form onSubmit={handleSubmit((data) => handleLogin(data))}>
					<div className="item2Log">
						<input {...register("email")} placeholder="email" />
					</div>
					<div className="item3Log">
						<input {...register("password")} placeholder="password" />
					</div>
					<div className="item4Log">
						<input type="submit" />
					</div>
				</form>	
			</div>
		</div>
	);
}
