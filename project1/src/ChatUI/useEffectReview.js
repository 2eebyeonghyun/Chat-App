// effect
// 리액트의 컴포넌트들은 외부 시스템과 동기화가 필요한 경우가 있다.
//  -> 서버 연결 설정, 랜더링 후 분석결과를 보낼때, 그 외 데이터 비동기 로딩 시
//  -> 화면에 요소들 로딩( 랜더링)다 끝나고 실행할 내용들이 있다면 사용

import { useState, useRef, useEffect } from "react";

// useEffect는 promise then메서드와도 비슷하다.

// 컴포넌트의 유형

// 랜더링코드 : 프로퍼티와 상태를 가져와 변환한 후에 화면에 표시할 내용을 리턴
//  -> JSX를 통해 화면에 표시할 내용을 리턴
//  -> 가장 좋은 랜더링 코드는 결과만 어떻게 보여줄건지만 고민( 결과 계산)
//     (단순히 결과만 보여준다해서 순수코드라고 부른다.)

// 이벤트 핸들러
// 어플리케이션에서 일어나는 이벤트를 제어하는 영역
// 컴포넌트 내부에 중첩되어 있는 함수들 -> 실질적 작업 수행의 영역
// 리액트의 이벤트 핸들러는 side effect를 포함( 프로그램의 상태를 변경)
//  -> 효과는 필요할 때 쓰는것이며 필수는 아니다.

// effect 
//  -> 화면이 업데이트 된 후에 실행이 되니 외부와의 동기화 관점으로도
//     해석할 수 있음( 네트워크 연결, 외부 API 호출)

// effect의 작성
// 1. 효과선언 : useEffect를 통해 랜더링 직 후 실행되도록 처리할 수 있다.
// 2. 종속성 지정 : 매 랜더링마다 실행하는 대신 필요할때만 다시 실행
//  -> fadein의 경우는 컴포넌트가 보일때 실행되어야한다.
//  -> 해당 컴포넌트에 종속성을 지정하여 제어하는 방법이 있다.
// 3. 정리작업추가 : 일부 효과는 수행하던 작업의 중지, rollback시 사용해야할 수 있다.
//  -> 구독/ 구독취소, 데이터로딩/ 취소


// 이 컴포넌트는 약간의 수정이 필요( 처음 호출시에는 DOM이 존재하지 않음)
function VideoLoading({ src, isPlaying }) {

    const ref = useRef(null);
  
    // useEffect 훅을 통해 컴포넌트가 랜더링된 후 실행할 수 있도록
    // 해당 내용들을 제어
    // 1. VideoLoading 컴포넌트를 실행
    // 2. 컴포넌트가 랜더링이 진행
    // 3. 화면을 업데이트 -> video 태그가 DOM에 등록
    // 4. 효과를 제어
    // 5. 효과는 APP에서 isPlaying이라는 state( 상태값)이 존재하기 때문에
    //    그것을 기반으로 play, pause를 호출
    // 될때마다 실행도 맞는말이지만 좀더 정확히 말씀드리자면 "실행이 된 후" 라 보시는게 맞다

    // useEffect가 없다는 가정하 DOM 로딩이 완료되지 않은 상황에서
    // 해당 요소를 찾는다면 당연히 에러가 발생
    //  -> 이러한것들을 side Effect
    // VideoLoading 컴포넌트가 랜더링 시
    // video 태그를 DOM에 주입 -> react가 효과를 실행하도록 
    // useEffect를 사용

    // 주의사항 : 미디어를 다루는것은 이렇게 간단하진 않음

    // Effect의 주의사항 :
    //  -> Effect의 기능 자체에 있다.
    //     (모든 랜더링 이후 실행되다보니 무한루프 발생 이슈가 있을 수 있다.)
    // 상태설정 = 랜더링 발생
    //  -> 상태 즉시 설정 = 전원 플러그를 자기 자신에게 연결하는것과 같음
    //     (효과실행 -> 상태설정 -> 효과실행 -> 상태설정)
    //  -> 원하는 동작이 아닐 경우가 발생
    //     1. 잘못되는건 둘째치고 성능상 불리할 수 있다.( 느릴수 있다.)
    //     2. 원하지 않은 이벤트 발생 가능성
    useEffect(() => {
        
        if (isPlaying) {
            console.log('재생 호출');
            ref.current.play();
        } else {
            console.log('일시 정지');
            ref.current.pause();
        }
    }, [isPlaying]);
    // []의 의미 : 종속성 선언( dependency array)
    // 위의 effect는 isPlaying 상태를 기준으로 코드의 실행 유무를 결정
    //  -> effect에서는 해당 상태에 대한 종속성을 지정할 수 있다.
    //  -> 종속성 선언을 통해 불필요한 효과 실행을 제어할 수 있다.
    //     ( 종속성 배열에 state를 정의해준다면 react는 랜더링중 동일한 상태값이라면 효과를 다시 실행하지 말라고 지시)
  
    // 주의사항 : 종속성으로 지정한 것이 예상과 다를 경우 에러가 발생할 수 있다.
    //  -> 종속성 지정에 대해 복잡해질수록 많은 고민이 필요

    return <video ref={ref} src={src} loop playsInline />;
}


// 랜더링 도중 DOM에 대한 작업을 수행하려는 코드다 보니
// 에러가 날 수 밖에 없다.
//  -> VideoLoading 컴포넌트 호출 시에는 아직 DOM이 없다.
// 그렇다면 언제 DOM이 불러와지는지? -> JSX가 완전히 리턴된 후

// 컴포넌트 구성은 Main App
//  -> App 컴포넌트의 자식인 VideoLoading으로 구성
//     App 컴포넌트의 state를 인수로 잘만 넘겨주면 상태를 공유
export default function App() {

    // 처음부터 영상이 재생되지 않도록 처리하기 위해 false
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');

    return(
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '영상 중단' : '영상 재생'}</button>
            <VideoLoading 
                isPlaying={isPlaying}
                src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            />
        </>
    );
}