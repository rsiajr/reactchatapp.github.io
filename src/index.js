import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import ConvoLogo from 'img/ConvoLogo.jpg';


function App () {
	return (
		<div>
			<header className="headerbar">
				{<img className="conlogo" src={ConvoLogo}/>}
				<input type="search" placeholder="Search Convo" className="searchconvo" />
			</header>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
