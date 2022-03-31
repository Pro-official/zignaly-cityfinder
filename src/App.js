import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className='app'>
			<Navigation />
			<Header />
		</div>
	);
}

export default App;
