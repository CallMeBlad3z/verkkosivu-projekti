import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  async function sendData(data) {
        // maby dont hardcode the url
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.json)
  }
  return (
    <div> 
      <h1>Register page</h1>
      <p>Register stuff here</p>
  <form onSubmit={handleSubmit((data) => sendData(data))}>
      <input {...register("firstname")} placeholder="First name" />
      <input {...register("lastname")} placeholder="First name" />
      <input {...register("email")} placeholder="email" />
      <input {...register("password")} placeholder="password" />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Register