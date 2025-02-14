// 요구사항:
// 1. useCounter라는 커스텀 훅을 만드세요
// 2. 증가, 감소, 리셋 기능이 있어야 합니다
// 3. 최소값과 최대값을 설정할 수 있어야 합니다
// 4. 현재 값이 최소값이나 최대값일 때는 해당 버튼이 비활성화되어야 합니다

import React, { useState } from "react";

function useCounter(initialValue = 0, { min = 0, max = 10 } = {}) {
    
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count < max ? count + 1 : count);
    }

    const decrement = () => {
        setCount(count > min ? count - 1 : count);
    }

    const reset = () => {
        setCount(initialValue);
    }
    
    return { count, increment, decrement, reset }
}
  
  // 사용 예시
function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(5, { min: 0, max: 10 });
  
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment} disabled={count === 10}>+</button>
            <button onClick={decrement} disabled={count === 0}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

// 1. 입력값이 변경될 때마다 검색 결과 업데이트
// 2. 디바운스 처리 (입력이 끝나고 500ms 후 검색)
// 3. 로딩 상태 표시
// 4. 검색 결과가 없을 때 메시지 표시
// 5. 데이터는 다음의 주소에서 받아올것
// `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`


function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    // 여기에 코드를 작성하세요
  
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="검색어를 입력하세요"
            />

            {isLoading && <div>검색 중...</div>}
            {!isLoading && results.length === 0 && <div>검색 결과가 없습니다</div>}
            <ul>
                {results.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CounterComponent;