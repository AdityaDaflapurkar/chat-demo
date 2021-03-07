import React from 'react';
import socketIOClient from 'socket.io-client';
import Message from './Message';
import Footer from './Footer';
import { MESSAGE_STATUS, MESSAGE_TYPE } from './constants';


const ENDPOINT = 'http://127.0.0.1:3001';
const socket = socketIOClient(ENDPOINT);
class Room extends React.Component {
  state = {
    messageHistory: [],
    src: '',
  };

  componentDidMount() {
    socket.on('history', (data) => {
      console.log('history', data);
      this.setState(
        {
          messageHistory: data,
        },
        () => this.scrollToBottom()
      );
    });
    socket.on('typing', () => {
      this.onTypingStart();
    });
    socket.on('message', (message) => {
      this.receiveMessage(message);
    });

    socket.emit('load');
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  onTypingStart = () => {
    const newMessageHistory = this.state.messageHistory.concat({
      type: MESSAGE_TYPE.TYPING,
    });
    this.setState(
      {
        messageHistory: newMessageHistory,
      },
      () => {
        this.scrollToBottom();
      }
    );
  };

  setImage = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]), 'img');
    this.setState({
      src: URL.createObjectURL(event.target.files[0]),
    });
  };

  sendMessage = (message) => {
    const date = new Date();
    const newMessage = {
      text: message,
      sentBy: 'user',
      sentDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      status: MESSAGE_STATUS.SENT,
    };
    const newMessageHistory = this.state.messageHistory.concat(newMessage);
    this.setState(
      {
        messageHistory: newMessageHistory,
      },
      () => this.scrollToBottom()
    );
    socket.emit('message', newMessage);
  };

  receiveMessage = (message) => {
    console.log(message);
    const date = new Date();
    const newMessageHistory = this.state.messageHistory
      .slice(0, this.state.messageHistory.length - 1)
      .concat({
        text: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, ''),
        sentBy: 'bot',
        sentDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
        status: MESSAGE_STATUS.SENT,
      });
    this.setState(
      {
        messageHistory: newMessageHistory,
      },
      () => this.scrollToBottom()
    );
  };

  render() {
    
    return (
      <>
        <div style={{ backgroundColor: '#eeeeee'}}>
            <div style={{ height: 50 }}>
            </div>
                {this.state.messageHistory.map(message =>
                    <Message 
                        text={message.text}
                        sentBy={message.sentBy}
                        sentDate={message.sentDate}
                        status={message.status}
                        type={message.type}
                        //src={src}
                    />
                    )
                }
            </div>
            <div style={{ float:"left", clear: "both", paddingBottom: 60 }}
             ref={(el) => { this.messagesEnd = el; }}>
            </div>
        <Footer sendMessage={this.sendMessage} setImage={this.setImage} />
        
      </>
    );
  }
}

export default Room;
