// react-typing-animation 패키지 설치

// 이 두개는 아래 npm i --save react-typing-animation가 설치 에러가 났을 때 사용
// npm config set legacy-peer-deps true
// npm i

// npm i --save react-typing-animation

import React, { useState, useEffect } from "react";
import './app.css';
import './style.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const App = () => {

    // useState : 클래스 컴포넌트 없이 상태와 다른 react 기능을 함수 컴포넌트에서
    //            사용하기 위해 등장한 Hook
    //  -> useState는 해당 컴포넌트까지만 살아있다.
    // 현태 상태값은 messages와 currentTypingId가 보관을 할 것
    // 만약 두 상태값에 대한 업데이트가 감지되면
    //  -> setMessages, setCurrentTypingId메서드를 통해 상태값을 업데이트

    const [messages, setMessages] = useState([]); // 모든 채팅 메세지를 저장하기 위해 배열 형태로 만든다.
    // 현재 AI가 타이핑하는 메세지 추적을 하기 위해
    // null이 들어오는 이유는 AI가 처음 화면 실행됐을때 부터 타이핑 메시지를 추적할 이유가 없기 때문에
    //  -> 타이핑 메세지가 입력됐을 때

    // AI가 답변한 영역을 추적하기 위해 준비한 state
    //  -> currentTypingId : 다음으로 타이핑이 필요한 메세지를 찾기위해
    //                       현재 타이핑중인 메세지를 확인하는 상태 변수
    const [currentTypingId, setCurrentTypingId] = useState('');

    // setMessages((prevMessages) => [
    //     ...prevMessages,
    //     {어떠한 값들을 추가하는 업데이트 진행}
    // ]);


    // 파라미터 message는 MessageForm으로 부터 전달받아옴
    //  -> 일반 유저가 입력한 문자열
    const handleSendMessage = (message) => {

        // 받아온 메세지의 상태를 업데이트( 함수형 업데이트)
        //  -> 함수형 업데이트를 반드시 써야하는가?
        //  1. 상태에 대한 action이 비동기적으로 처리될 수 있어서
        //     (데이터 처리가 비동기로 될 수 있기 때문에)
        //  2. 함수가 실행되는 동안 최신화가 안될 수 있어서
        setMessages((prevMessages) => [
            ...prevMessages, // 이전 메세지 기억 -> 스프레드 연산자를 사용하여
                             // 새로운 배열을 생성한 후 기존에 저장했던 메세지들을 담아둔다.
                             // react의 객체들이 기본적으로 불변성을 띄기 때문에
            // isUser은 user인지 ai인지 구별
            {text: message, isUser: true}, // 유저가 입력한 내용이 출력
            {text: `당신이 입력한 메세지는 : '${message}'`, isUser: false, isTyping: true, id: Date.now()},
        ]);
    };


    // AI 타이핑이 종료됐을 때 이 메서드가 실행
    const handleEndTyping = (id) => {
        
        // state를 활용하여 상태 업데이트를 진행
        // 메세지 관리 
        // id값을 기준으로 ( id를 파라미터로 받아와)
        //  -> message의 상태를 업데이트
        //  -> 상태 업데이트시에는 다음의 코드를 추가
        // msg : 받아온 메세지에 대해 구분할 때 map함수를 이용해서 msg라는 단위로 나눔
        // msg.id === id ? {...msg, isTyping: false} : msg

        // currentTypingId값을 초기화

        setMessages((prevMessages) => 
            prevMessages.map((msg) => msg.id === id ? {...msg, isTyping: false} : msg)
        );
        setCurrentTypingId('');
    };


    // useEffect는 랜더링후에 부작용을 확인하기 위해 사용하는 Hook
    //  -> 랜더링후 사이드 이펙트를 실행하는 훅
    // side effect: 랜더링 후 비동기로 처리할 부수적인 효과
    //  -> react식 콜백모음( 모든 작업이 끝난 후 실행할 수 있는 콜백 모음집)
    // 화면에 랜더링해줄거 다 해주고 실질적인 데이터는 비동기로 처리
    // 화면에 부를거 다 부르고 처리해야할거 같으면 추가해주면된다.
    // 필요한 이유 : 순차적 실행이 필요할 때
    //  -> currentTypingId가 null일수도 있잖음
    //  -> 조건을 만족하는 메세지를 찾아서 다시 타이핑하도록 코드를 작성
    // 여기서는 이벤트 조정을 위해 사용했지만
    // useEffect는 실행순서 때문에 데이터 로딩이 안될 경우 가장 많이 사용

    // 아래의 예시는 이벤트와 effect를 분리하여 처리하는 case
    useEffect(() => {

    });


    return(
        <div className="app">
            <div className="chat-box">
                <h1>Chat App</h1>
                {/* 
                    컴포넌트 영역 MessageList, MessageForm 
                    MessageList에서는 메세지 목록을 조회,
                    MessageForm에서는 데이터 입력과 메세지 관리
                */}
                <MessageList messages={messages} onEndTyping={handleEndTyping} currentTypingId={currentTypingId} />

                {/* onSendMessage는 새로운 메세지가 전송될 때 호출되는 props */}
                <MessageForm onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

export default App;