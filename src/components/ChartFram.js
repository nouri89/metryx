import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Chart from "./Chart";
import "./ChartFrame.css";

import "./Legend.css";

const ChartFrame = () => {
	return (
		<Container id="cont">
			<Row>
				<Col id="charTitle">Title</Col>
			</Row>
			<Row>
				<Col id="chart">
					<Chart />
				</Col>
			</Row>
		</Container>
	);
};

export default ChartFrame;
