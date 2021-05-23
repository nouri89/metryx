import React from "react";
//import {Radar}  from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
	return (
		<div>
			<h1>hello world</h1>
			<Bar
				data={{
					labels: [
						"Eeating",
						"Drinking",
						"Sleeping",
						"Designing",
						"Coding",
						"Cycling",
						"Running",
					],
				}}
				height={400}
				width={600}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

export default BarChart;

/*
<Bar
				data={{
					labels: [
						"Eeating",
						"Drinking",
						"Sleeping",
						"Designing",
						"Coding",
						"Cycling",
						"Running",
					],
				}}
				height={400}
				width={600}
			/>


*/
