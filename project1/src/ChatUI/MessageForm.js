import { useState } from 'react';

const MessageForm = ({ onSendMessage }) => {

    // MessageForm에서는 어차피 넘겨야할 데이터는 문자열
    //  -> 문자열 : 사용자가 입력한 값 자체를 의미
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(message);
        setMessage('');
    }

    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-button" type="submit">Send</button>
        </form>
    );
}

export default MessageForm;