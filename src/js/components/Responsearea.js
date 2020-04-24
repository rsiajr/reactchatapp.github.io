import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import Sendreply from 'components/Sendreply';

const RESPONSE_DATA = [
  {
    senderId: "Don Corleogne",
    text: "Hi Anna, ?"
  },
  {
    senderId: "Anna",
    text: "I'm good, how are you?"
  }
]


class Responsearea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: RESPONSE_DATA
      };
    }
    changeReply = () => {
      this.setState({message: "I'm doing well, Don, how are you?"});
    }
    render() {
      return (
        <div className="messagearea">
        <article class="topofreply" id="topofconvo">
                <h1 class="replyname" id="username"> Anna </h1>
            <div class="contactcontainer"></div>
            <div class="replybody" id="messagebody">
                <h2 id="mainmessage"> {this.state.reply} </h2>
            </div>
        </article>
        </div>
      );
    }
  }


ReactDOM.render(<Responsearea />, document.getElementById('responsemain'))