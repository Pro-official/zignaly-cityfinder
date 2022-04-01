import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
	return (
		<div className='app'>
			<Navigation />
			<SearchBox />
		</div>
	);
}

export default App;
