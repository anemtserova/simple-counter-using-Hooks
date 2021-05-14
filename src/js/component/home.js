import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	const [userNum, setUserNum] = useState(null);

	return (
		<div className="container center">
			<button
				className="btn"
				onClick={() => {
					props.myFunction(userNum);
				}}>
				Set Number
			</button>
			<input
				className="input-field"
				type="number"
				placeholder="Enter a number"
				onChange={e => {
					setUserNum(e.target.value);
				}}></input>
			<div className="square">{props.number1}</div>
			<div className="square">{props.number2}</div>
			<div className="square">{props.number3}</div>
			<div className="square">{props.number4}</div>
			<div className="square">{props.number5}</div>
			<div className="square">{props.number6}</div>
		</div>
	);
}

Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string,
	myFunction: PropTypes.func
};
