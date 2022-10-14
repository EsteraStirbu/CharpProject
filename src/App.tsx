import { GET_LAUNCHES } from "./utils/api";
import "./App.css";
import { useQuery } from "@apollo/client";
import { BarChart, Bar, Tooltip, XAxis, YAxis } from "recharts";

function App() {
	const { loading, data } = useQuery(GET_LAUNCHES);

	if (loading) {
		return <div>Loading...</div>;
	}

	console.log(data);

	const yearLaunches = data.launchesPast.reduce(
		(previousValue: { [key: string]: number }, x: { launch_year: string }) => {
			const numberOfLaunches = previousValue[x.launch_year] || 0;

			previousValue[x.launch_year] = numberOfLaunches + 1;

			return previousValue;
		},
		{}
	);

	console.log(yearLaunches);
	return (
		<div className="container">
			<BarChart
				width={500}
				height={500}
				data={Object.keys(yearLaunches).map((x) => {
					return {
						name: x,
						uv: yearLaunches[x],
					};
				})}
			>
				<Bar dataKey="uv" fill="#8884d8" />
				<Tooltip />
				<XAxis dataKey="name" />
				<YAxis />
			</BarChart>
		</div>
	);
}

export default App;
