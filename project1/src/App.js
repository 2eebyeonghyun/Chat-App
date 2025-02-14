import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// App이라는 이름의 컴포넌트를 정의하고
// name, talk라는 변수를 사용 -> 선언적으로 UI에 랜더링
// UI를 랜더링하는 파트에서 HTML과 JS를 조합하여 UI를 작성
// 코드에서 변수들의 값은 동적으로 사용된다.
//  -> 컴포넌트 내부에서 선언하여 UI에 동적으로 적용
//  -> React에서 해당 state를 자동으로 업데이트하고 관리하도록 진행하는 방식
function App() {

    const [name, setName] = useState('Christiano Ronaldo');
    // const name = 'Christiano Ronaldo';
    const talk = 'siuuuuuuuuuuuuuuuuuuuuuu';
    // 컴포넌트 객체들의 값이나 그 외의 내용들을 선언

    // 컴포넌트 내부 메서드들 선언 및 구현

    // 실질적인 UI가 구성되는 곳
    return(
        <div>
            <h1>Hi! my name is {name}</h1>
            <h1>{name} : {talk}</h1>
        </div>
    );
}

export default App;
