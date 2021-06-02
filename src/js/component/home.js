import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	const [userNum, setUserNum] = useState(0);
	let userInput = "";
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
				type="text"
				placeholder="Enter a number"
				onChange={e => {
					userInput = e.target.value;
					setUserNum(userInput);
				}}></input>
			<button
				className="btn"
				onClick={() => {
					props.startRun();
				}}>
				Stop/Resume
			</button>
			<button
				className="btn"
				onClick={() => {
					props.clearInputField(userNum);
					setUserNum(0);
					props.myFunction(userNum);
					console.log(userInput);
					//props.clearInputField(e.target.value);
				}}>
				Reset
			</button>

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
	myFunction: PropTypes.func,
	isRunning: PropTypes.bool,
	startRun: PropTypes.func,
	clearInputField: PropTypes.func
};
