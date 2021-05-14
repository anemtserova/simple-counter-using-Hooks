import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Timer(props) {
	const [userNumTimer, setTimer] = useState(0);
	return (
		<div className="container center">
			<button
				className="btn"
				onClick={() => {
					props.myFunctionTimer(userNumTimer);
				}}>
				Set Timer
			</button>
			<input
				className="input-field"
				type="number"
				placeholder="Enter a number"
				onChange={e => {
					setTimer(e.target.value);
				}}></input>
			<div className="square">{props.numberTimer1}</div>
			<div className="square">{props.numberTimer2}</div>
			<div className="square">{props.numberTimer3}</div>
			<div className="square">{props.numberTimer4}</div>
			<div className="square">{props.numberTimer5}</div>
			<div className="square">{props.numberTimer6}</div>
		</div>
	);
}

Timer.propTypes = {
	numberTimer1: PropTypes.string,
	numberTimer2: PropTypes.string,
	numberTimer3: PropTypes.string,
	numberTimer4: PropTypes.string,
	numberTimer5: PropTypes.string,
	numberTimer6: PropTypes.string,
	myFunctionTimer: PropTypes.func
};
