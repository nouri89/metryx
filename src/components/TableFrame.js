import React from "react";
import Legend from "./Legend";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Legend.css";

const TableFrame = () => {
	return (
		<Container id="table">
			<Row id="title">
				Title
			</Row>
			<Row id="legend">	
					<Legend />	
			</Row>
		</Container>
	);
};

export default TableFrame;
