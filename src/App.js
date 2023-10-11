import {  Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Register from "./components/Regi/Register";
import Edit from './components/Edit/Edit'
import Details from "./components/Details/Details";
function App() {
	const user = localStorage.getItem("token");

	return (
		
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{/* {user && <Route path="/" exact element={<Home/>}}/>* */}
			<Route exact path="/signup"  element={<Signup />} />
			<Route exact path="/login"  element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route exact path="/register"  element={<Register/>}/>
			<Route exact path="/edit/:id"  element={<Edit/>}/>
			<Route exact path="/view/:id"  element={<Details/>}/>

			</Routes>
		
	);
}

export default App;
