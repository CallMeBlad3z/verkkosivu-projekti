import useState from 'react';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const Login = () => {
  const prisma = new PrismaClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log('User logged in')
      } else {
        // handle error
        console.log('User not found')
      }
    } catch (error) {
      console.error(error);
      // handle error
    }
  };
  return (
    <section className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <input className="login-input" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input className="login-input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button onSubmit={handleSubmit} type="login-btn">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login