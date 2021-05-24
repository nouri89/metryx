import React from "react";
import "./Legend.css";

const DataRows = ({ data }) => {
    console.log(data);

	return (
		<div>
            {data.map(e => { return <td>{e}</td>})}
		</div>
	);
};

export default DataRows;
