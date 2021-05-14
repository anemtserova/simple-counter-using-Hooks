//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Timer } from "./component/timer.js";

//render your react application
let num = 0;
let timer = 100000;
const setNum = number => {
	num = parseInt(number);
};

const setT = time => {
	timer = parseInt(time);
};
const counter = () => {
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
		/>,
		document.querySelector("#app")
	);
};

const timerClock = () => {
	timer -= 1;
	let stringTimer = timer.toString();
	let stringTimerPadded = stringTimer.padStart(6, "0");
	let timer2 = stringTimerPadded.slice(-6);
	console.log(timer2);

	ReactDOM.render(
		<Timer
			numberTimer1={timer2.charAt(0)}
			numberTimer2={timer2.charAt(1)}
			numberTimer3={timer2.charAt(2)}
			numberTimer4={timer2.charAt(3)}
			numberTimer5={timer2.charAt(4)}
			numberTimer6={timer2.charAt(5)}
			myFunctionTimer={setT}
		/>,
		document.querySelector("#app")
	);
};
setInterval(counter, 1000);
//setInterval(timerClock, 1000);
