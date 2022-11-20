# My-Portfolio

원혜강의 포트폴리오 제작소 🐮💬

<br/>

## TODO

-   [x] 반응형 제작
-   [ ] 세부 페이지 제작
-   [x] 애니메이션 다듬기
-   [ ] project 제작

<br/>

## ✅  알게된 점 1 : [코드 보러가기](https://github.com/kanghyew0n/My-Portfolio/blob/main/components/ItsMe.js)
### useRef & [forwardRef](https://ko.reactjs.org/docs/forwarding-refs.html) 로 스크롤 이동 시키기 (feat. [scrollIntoView](https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView))


> **forwardRef** : ref 전달은 컴포넌트를 통해 자식 중 하나에 ref를 자동으로 전달하는 기법 <br/>
> **scrollIntoView** : 인터페이스의 scrollIntoView() 메소드는 scrollIntoView()가 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤함

[요구사항]
-   mainpage에서 `<Header>` 컴포넌트에 `It's Me !` 를 클릭하면 스크롤이 밑으로 내려가서 해당 영역(It's Me!)이 보여지도록 하기!

[문제점]
-   useRef로 해당 영역(It's Me!)을 잡고 `<Header>` 메뉴를 클릭하면 이동하게 해야하는데 잡히지 않음 ! → 계속 초기 설정한 null 뜸
-   (해결) forwardRef 를 사용해서 ref 값을 해당 컴포넌트까지 전달시켜야겠다고 생각했다!

[실패 코드]

```js
 const itsMeRef = useRef(null);

 const onItsMeClick = () => {
    itsMeRef.current?.scrollIntoView({ behavior: "smooth" });
};

 ...

<ItsMe ref={itsMeRef} />
```

<br/>

[성공 코드]

-   위의 코드에서 이 부분을 추가해주었다!
-   원하는 위치의 div를 ref로 잡아 위치하게 해주었다
-   컴포넌트가 나눠져있을 때 ref를 사용해야 할 일이 생겼을 때 사용하면 될 것 같다!

```js
// ItsMe.js
import { forwardRef } from "react";

const POINTER = forwardRef((props, ref) => {
    return (
        <div className="titleGroup">
            <h2 ref={ref}>It's Me !</h2>
            <div className="line"></div>
        </div>
    );
});

const ItsMe = ({ itsMeRef }) => {
    return (
        <Container>
            <POINTER ref={itsMeRef} />
            <ItsMeContainer>
                {INFO.map((info, idx) => (
                    <InfoCard info={info} key={idx} />
                ))}
            </ItsMeContainer>
        </Container>
    );
};
```

<br/>

<br/>
<br/>
