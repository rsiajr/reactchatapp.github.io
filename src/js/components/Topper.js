import React from 'react';
import 'css/index.css';
import ConvoLogo from 'img/ConvoLogo.jpg';


function Topper () {
	return (
		<div className="headerbar">
			<article>
				{<img className="conlogo" src={ConvoLogo}/>}
			</article>
			<article>
				<input type="search" placeholder="Search Convo" className="searchconvo"/>
			</article>
		</div>
	)
}

export default Topper;