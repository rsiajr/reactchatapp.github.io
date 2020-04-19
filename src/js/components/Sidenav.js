import React from 'react';
import 'css/index.css';
import UserPhoto from 'img/userphoto.jpg';


function Sidenav () {
	return (
        <div className="sidenav">
            <div className="mainsec">
                <div  className="userdetails">
                    {<img className="profilepic" src={UserPhoto} id="username"/>}
                    <h1 className="username" id="username">Anna</h1>
                    <input type="button" className="createnew" id="createnew" value="NEW MESSAGE"/>
                </div>
                <nav className="mainnav" id="mainnav">
                    <ul className="navbuttons" id="navbuttons">
                        <input type="search" placeholder="Search Contacts" className="searchcontacts" id="searchcontacts"/>
                        <li className="sections recent" id="recent">RECENT</li>
                        <li className="sections messages" id="messages">MESSAGES</li>
                        <li className="sections contactlist" id="contactlist">CONTACTS</li>
                    </ul>
                </nav>
            </div>
        </div>
	)
}

export default Sidenav;