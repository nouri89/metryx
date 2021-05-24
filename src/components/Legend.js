import React from "react";
import { Table } from "react-bootstrap";
import data from "./data.json";
import DataRows from "./DataRows";
import "./Legend.css";

const Legend = () => {
	const chartData = data;
	const counter = ["First", "Second", "Third"];
	let header = Object.keys(chartData[0]);

	console.log(chartData);

	return (
		<Table borderless>
			<tr>
				<th id="dataSet">.</th>
				{header.map((e) => {
					return <th>{e}</th>;
				})}
			</tr>
			{chartData.map((e, i) => {
				return (
					<tr id="data">
						<td className="fHeader">{counter[i]} dataset</td>
						{[Object.values(e)].map((data) => (
							<DataRows data={data} />
						))}
					</tr>
				);
			})}
		</Table>
	);
};

export default Legend;
/*
{dataSet.filter((e) => {
				return <tr id="data">{e}</tr>
			})}

<tr id="data">
				<td className="fHeader">First dataset</td>

				<td>80</td>
				<td>23</td>
				<td>90</td>
				<td>12</td>
				<td>67</td>
				<td>37</td>
				<td>90</td>
			</tr>
			<tr id="data">
				<td className="fHeader">Second dataset</td>

				<td>42</td>
				<td>10</td>
				<td>42</td>
				<td>37</td>
				<td>92</td>
				<td>40</td>
				<td>78</td>
			</tr>


*/
