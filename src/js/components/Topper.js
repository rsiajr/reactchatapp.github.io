import React from 'react';
import 'css/index.css';
import ConvoLogo from 'img/ConvoLogo.jpg';


function Topper () {
	return (
		<div className="headerbar">
			{<img className="conlogo" src={ConvoLogo}/>}
			<input type="search" placeholder="Search Convo" className="searchconvo"/>
		</div>
	)
}

export default Topper;