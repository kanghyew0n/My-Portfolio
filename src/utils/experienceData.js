import Link from "next/link";

const webDesignLink = 'https://drive.google.com/file/d/1nOb7aewK6vmiag8W9qRTn1G9fWmZNGkD/view'
const mobileDesignLink = 'https://drive.google.com/file/d/1jyAucYf00cczoWrV8MLpclZj0x_u4uJL/view'

export const CAREER = [
  {
    id: '202410',
    company: "(주) 비바리퍼블리카 | Toss UX Engineer Assistant",
    info: [{
      title: "2024년 10월 ~ 진행중"
    }],
    contents: <></>
  },
  {
    id: '202301-202405',
    company: "(주)스퀘어스 | 큐샵 Qshop",
    info: [{
      title: "2023년 1월 ~ 2024년 5월 (1년 5개월)"
    }, {
      title: "🔗 홈페이지 링크",
      link: 'https://qshop.ai/'
    }],
    contents: <>
      <p className="text-lg font-light mb-2">
        큐샵은 누구나 코딩없이 웹사이트를 쉽게 생성할 수 있는 서비스로 핵심
        기능인 <b>노코드 웹빌더 에디터와 큐샵 자체 홈페이지를 개발</b>하였습니다.
        큐샵의 홈페이지와 에디터, 두가지 서비스 모두 <b>기획 단계부터 참여하여
          런칭까지</b> 함께 하였습니다.
      </p>
      <p className="text-lg font-light">
        <b>커밋 컨벤션 문서화, 코드리뷰의 도입</b> 등과 같은 노력으로 협업 환경을
        개선하였고, <b>성능 개선의 필요성을 제안</b>하여 <b>번들 분석 및 최적화 작업을
          진행</b>하여 프로젝트의 성장에 기여하였습니다.
      </p>
    </>
  }
]

export const EDUCATION = [
  {
    id: '202204-202210',
    name: ' 코드스테이츠 (Code States)',
    info: [{
      title: "2022년 04월 - 2022년 10월"
    }, {
      title: '🔗 코드스테이츠 홈페이지',
      link: 'https://www.codestates.com/'
    }],
    contents: <p className="text-lg font-light">Advanced software engineering, Immersive program (39기)</p>
  },
  {
    id: '201802-20238',
    name: '한국공학대학교',
    info: [{
      title: "2018.03 - 2023.08"
    }],
    description: 'IT경영 전공 | 미디어디자인공학 부전공',
    contents: <>
      <p className="text-lg font-light">
        ⦁ IT 경영학과에서 주로 웹 개발이나 데이터베이스 위주의 수업을
        들었습니다.
      </p>
      <p className="text-lg font-light">
        ⦁ 미디어디자인공학과에서 웹/앱 프로토타입 디자인 및 UX를
        공부했습니다. ( <Link href={webDesignLink} target="_blank">웹디자인</Link> / <Link href={mobileDesignLink} target="_blank">모바일 디자인</Link>)
      </p>
    </>
  },
]