
<br/>

<h1 align="center">kanghyew0n Portfolio</h1>
<p align="center">
 강혜원의 포트폴리오입니다 :) -2022</p>

<br/>
<br/>

## 🔩 Install

```
npm install 
npm run dev
```

<br/>

## 📓 TODO

-   [x] 반응형 제작
-   [x] 세부 페이지 제작
-   [x] 애니메이션 다듬기
-   [x] project 제작
-   [x] project hover image

<br/>

## ✅ 알게된 점 1 : [코드 보러가기](https://github.com/kanghyew0n/My-Portfolio/blob/main/components/ItsMe.js)

### useRef & [forwardRef](https://ko.reactjs.org/docs/forwarding-refs.html) 로 스크롤 이동 시키기 (feat. [scrollIntoView](https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView))

> **forwardRef** : ref 전달은 컴포넌트를 통해 자식 중 하나에 ref를 자동으로 전달하는 기법 <br/> > **scrollIntoView** : 인터페이스의 scrollIntoView() 메소드는 scrollIntoView()가 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤함

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

## ✅ 알게된 점 2 : [코드 보기](https://github.com/kanghyew0n/My-Portfolio/blob/main/components/projectPage/ProjectCard.js)

### [Next.js에서 이미지 사용하기](https://nextjs.org/docs/basic-features/image-optimization)

-   nextjs는 프레임워크 답게 (?) 정해진 방법으로 이미지를 업로드 해야했다.
-   공식문서에서 이미지 최적화 방법이 안내되어있다.
-   `import Image from 'next/image'` 필요하다.
-   이미지 파일은 public안에 존재해야한다.
    -   루트를 지정할때도 자동으로 public 내부 파일을 찾아보기 때문이다.
-   <Image/> 태그를 사용해야한다.
-   태그 내부엔 width, height를 필수로 지정해야한다.

```js
import Image from 'next/image'
...

<Image
    src="/assets/site.svg"
    width={32}
    height={32}
    className="githubImage"
    alt="사이트 이미지"
    onClick={() => window.open(`${project.serviceURL}`)}
/>
```

<br/>
<br/>
