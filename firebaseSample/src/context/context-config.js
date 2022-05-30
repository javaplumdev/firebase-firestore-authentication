// React
import { createContext, useState } from 'react';
// Firebase
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
// React router dom
import { Redirect } from 'react-router-dom';

export const ContextVar = createContext();

export function ContextFunction({ children }) {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [logInEmail, setLogInEmail] = useState('');
	const [logInPassword, setLogInPassword] = useState('');

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);

			<Redirect to="/studentpage" />;
		} catch (error) {
			console.log(error.message);
		}
	};

	const logIn = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				logInEmail,
				logInPassword
			);
			console.log(user);

			<Redirect to="/studentpage" />;
		} catch (error) {
			console.log(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
		<Redirect to="/" />;
	};

	return (
		<ContextVar.Provider
			value={{
				registerEmail,
				registerPassword,
				logInEmail,
				logInPassword,
				setRegisterEmail,
				setRegisterPassword,
				setLogInEmail,
				setLogInPassword,
				register,
				user,
				logout,
				logIn,
			}}
		>
			{children}
		</ContextVar.Provider>
	);
}
