import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import Sendreply from 'components/Sendreply';


class Responsearea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reply: "I'm doing well, Don, how are you?"
      };
    }
    changeReply = () => {
      this.setState({reply: "Not bad, Don, how are you?"});
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