//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let num = 0;
let runNum = true;

const stopResume = () => {
	runNum = !runNum;
};

function clearInput(input) {
	if (input) input = null;
}

const setNum = number => {
	num = parseInt(number);
};

const counter = () => {
	if (runNum) {
		num += 1;
		let string = "00000" + num;
		let num2 = string.slice(-6);

		ReactDOM.render(
			<Home
				number1={num2.charAt(0)}
				number2={num2.charAt(1)}
				number3={num2.charAt(2)}
				number4={num2.charAt(3)}
				number5={num2.charAt(4)}
				number6={num2.charAt(5)}
				myFunction={setNum}
				startRun={stopResume}
				isRunning={runNum}
				clearInputField={clearInput}
			/>,
			document.querySelector("#app")
		);
	}
};

setInterval(counter, 1000);
