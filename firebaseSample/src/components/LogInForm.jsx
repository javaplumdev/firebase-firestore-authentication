// React
import { useContext } from 'react';
// Context
import { ContextVar } from '../context/context-config';

const LogInForm = () => {
	const {
		setRegisterEmail,
		setRegisterPassword,
		setLogInEmail,
		setLogInPassword,
		register,
		logIn,
	} = useContext(ContextVar);

	return (
		<>
			<h1>Register up</h1>
			<div>
				<input
					type="text"
					placeholder="email"
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
				<input
					type="text"
					placeholder="password"
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
				<button onClick={() => register()}>Create Account</button>
			</div>

			<h1>Sign up</h1>
			<div>
				<input
					type="text"
					placeholder="email"
					onChange={(e) => setLogInEmail(e.target.value)}
				/>
				<input
					type="text"
					placeholder="password"
					onChange={(e) => setLogInPassword(e.target.value)}
				/>
				<button onClick={() => logIn()}>Log in</button>
			</div>
		</>
	);
};

export default LogInForm;
