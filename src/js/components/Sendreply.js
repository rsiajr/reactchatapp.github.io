import React from 'react';
import ReactDOM from 'react-dom';
import Responsearea from 'components/Responsearea';
import 'css/index.css';


function Sendreply () {
	return (
        <div className="messagediv" id="messagediv">
            <input type="text" placeholder="Enter message here..." className="entermessage" id="entermessage" />
            <input type="button" value="Send" className="sendmessage" id="sendmessage" />
        </div>
    )
}

ReactDOM.render(<Sendreply />, document.getElementById('bottom'))