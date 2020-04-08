import React from 'react';
import ReactDOM from 'react-dom';
import Topper from 'components/Topper';
import 'css/index.css';


function App () {
	return (
		<header>
			<Topper />
		</header>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
