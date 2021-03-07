import './Message.css';
import { MESSAGE_STATUS, MESSAGE_TYPE } from './constants';
import BotTyping from './BotTyping';
import img3 from './imgs/img3.png';

export default function Message(props) {
  const messageData = {
    user: {
      justifyContent: 'flex-end',
      from: 'You',
      cssClass: 'user-message',
      fromColor: 'blue',
    },
    bot: {
      justifyContent: 'flex-start',
      from: 'Testbot',
      cssClass: 'bot-message',
      fromColor: 'red',
    },
  }[props.sentBy];

  return (
    <>
      {props.type === MESSAGE_TYPE.TYPING ? (
        <BotTyping />
      ) : 
      (
        <div
        style={{ display: 'flex', justifyContent: messageData.justifyContent }}
      >
        <div className={messageData.cssClass}>
          <div
            style={{
              fontSize: 14,
              color: messageData.fromColor,
              fontWeight: 'bold',
            }}
          >
            {messageData.from}
          </div>
          {props.text}
         {/* <img src={img3} style={{ width: 250, height: 150 }} />*/}
          <div
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'right',
            }}
          >
            {props.status === MESSAGE_STATUS.SENT
              ? `Sent: ${props.sentDate}`
              : 'Sending...'}
          </div>
        </div>
      </div>
        )}
      
    </>
  );
}
