import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import ProfilePic from 'img/ProfilePic.jpg';


function Messagearea () {
	return (
        <div className="messagearea">
            <article class="topofconvo" id="topofconvo">
                    {<img class="contactpic" src={ProfilePic} id="contactpic" />}
                    <h1 class="contactname" id="contactname">Don Corleogne</h1>
                <div class="contactcontainer"></div>
                <div class="messagebody" id="messagebody">
                    <h2 id="mainmessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ratione enim dignissimos aliquam quis. Eligendi aliquid dolorem autem ratione cum dignissimos ullam voluptates excepturi itaque, harum totam cupiditate necessitatibus. Fuga?</h2>
                </div>
            </article>
        </div>
	)
}

ReactDOM.render(<Messagearea />, document.getElementById('main'))