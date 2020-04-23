import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import UserPhoto from 'img/userphoto.jpg';

class Responsearea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "Anna",
        reply: "I'm doing well, Don, how are you?"
      };
    }
    changeReply = () => {
      this.setState({reply: "blue"});
    }
    render() {
      return (
        <div className="messagearea">
        <article class="topofconvo" id="topofconvo">
                {<img class="contactpic" src={UserPhoto} id="contactpic" />}
                <h1 class="contactname" id="contactname"> {this.state.username} </h1>
            <div class="contactcontainer"></div>
            <div class="messagebody" id="messagebody">
                <h2 id="mainmessage"> {this.state.reply} </h2>
            </div>
        </article>
        <button
            type="button"
            onClick={this.changeReply}
          >Change reply</button>
        </div>
      );
    }
  }


ReactDOM.render(<Responsearea />, document.getElementById('responsemain'))