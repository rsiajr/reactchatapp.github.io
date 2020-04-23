import React from 'react';
import ReactDOM from 'react-dom';
import Topper from 'components/Topper';
import Sidenav from 'components/Sidenav';
import Messagearea from 'components/Messagearea';
import Responsearea from 'components/Responsearea';
import 'css/index.css';


function App () {
	return (
		<div>
			<header>
				<Topper />
				<Sidenav />
			</header>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
