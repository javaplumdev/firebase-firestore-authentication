import './App.css';
// Context
import { ContextFunction } from './context/context-config';
// Components
import LogInForm from './components/LogInForm';
import StudentPage from './components/studentPortal/StudentPage';
// React router DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<ContextFunction>
				<div className="App">
					<Routes>
						<Route path="/" element={<LogInForm />} />
						<Route path="/studentpage" element={<StudentPage />} />
					</Routes>
				</div>
			</ContextFunction>
		</Router>
	);
}

export default App;
