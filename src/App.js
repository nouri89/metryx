import "./App.css";
import TableFrame from "./components/TableFrame"
import ChartFrame from "./components/ChartFram";


function App() {
	return (
		<div className="App" style={{ display: "flex",justifyContent:"center" }}>
			<ChartFrame />
			<TableFrame/>
		</div>
	);
}

export default App;
