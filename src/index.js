import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./js/components/Greeting";
import './css/index.css';

const App = () => {
	return <Greeting name="World" />
}

ReactDOM.render(<App />, document.getElementById('root'));