import { useContext } from 'react';

const StudentPage = () => {
	const { user, logout } = useContext(ContextVar);

	return (
		<>
			<p>Student name</p>

			<h1>User logged in: {user?.email}</h1>

			<button onClick={() => logout()}>Log out</button>
		</>
	);
};

export default StudentPage;
