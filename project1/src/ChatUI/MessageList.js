// react typing animation 라이브러리
//  -> 타이핑효과를 쉽게 구현할 수 있도록 제공되는 라이브러리
import Typing from "react-typing-animation";

// 타이핑 애니메이션의 적용은 AI에만 적용되어야한다. 
// 구분을 하는 가장 편한 방법 : 데이터 비교
const MessageList = ({ messages, onEndTyping, currentTypingId }) => {

    return(
        <div className="messages-list">
            {messages.map((message, index) => 
                message.isTyping && message.id === currentTypingId ? (
                    <Typing 
                        key={`typing-${message.id || index}`} 
                        speed={100} 
                        onFinishedTyping={() => onEndTyping(message.id)}
                    >
                        <div className={message.isUser ? 'user-message' : 'ai-message'}>
                            {message.text}
                        </div>
                    </Typing>
                ) : (
                    <div 
                        key={`message-${message.id || index}`} 
                        className={message.isUser ? 'user-message' : 'ai-message'}
                    >
                        {message.text}
                    </div>
                )
            )}
        </div>
    );
};

export default MessageList;