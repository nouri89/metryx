import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Radar } from "react-chartjs-2";
import data from "./data.json";

const Chart = () => {
	const chartData = data;

	return (
		<Container>
			<Row>
				<Radar
					data={{
						labels: Object.keys(chartData[0]),
						datasets: [
							{
								label: "My First Dataset",
								backgroundColor: "rgba(255,99,132,0.2)",
								borderColor: "rgba(255,99,132,1)",
								borderWidth: 2.5,
								data: Object.values(chartData[0]),
							},
							{
								label: "My Second Dataset",
								backgroundColor: "rgba(54,162,235,0.2)",
								borderColor: "rgba(54,162,235,1)",
								borderWidth: 2.5,
								data: Object.values(chartData[1]),
							},
						],
					}}
					height={400}
					width={590}
					options={{ maintainAspectRatio: false }}
				/>
			</Row>
		</Container>
	);
};

export default Chart;
