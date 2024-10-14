export default function Experience() {
  return (
    <section className="flex flex-col gap-y-[64px]">
      <div className="flex pt-[60px] lg:pt-[100px]">
        <div className="block w-[300px] font-bold text-[28px] lg:text-[36px]">
          Career
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-[24px] text-nowrap mb-[10px]">
            (주)스퀘어스 | 큐샵 Qshop
          </h1>
          <p className='mb-5 font-light'>2023년 1월 ~ 2024년 5월 (1년 5개월) | 🔗 홈페이지 링크</p>
          <p className="text-lg font-light">
            큐샵은 누구나 코딩없이 웹사이트를 쉽게 생성할 수 있는 서비스로 핵심
            기능인 <b>노코드 웹빌더 에디터와 큐샵 자체 홈페이지를 개발</b>하였습니다.
            큐샵의 홈페이지와 에디터, 두가지 서비스 모두 <b>기획 단계부터 참여하여
            런칭까지</b> 함께 하였습니다.
          </p>
          <p className="text-lg font-light">
            커밋 컨벤션 문서화, 코드리뷰의 도입 등과 같은 노력으로 협업 환경을
            개선하였고, 성능 개선의 필요성을 제안하여 번들 분석 및 최적화 작업을
            진행하여 프로젝트의 성장에 기여하였습니다.
          </p>
        </div>
      </div>

      <div className="flex pt-[60px] lg:pt-[100px]">
        <div className="w-[300px] font-bold text-[28px] lg:text-[36px]">
          Education
        </div>
        <div className="flex-1">
          <div className="mb-20">
            <h1 className="font-bold text-[24px] text-nowrap mb-[10px]">
              코드스테이츠 (Code States)
            </h1>
            <p>2022년 04월 - 2022년 10월 | 🔗 코드스테이츠 홈페이지</p>
            <p className="text-lg font-light">
              Advanced software engineering, Immersive program (39기)
            </p>
          </div>

          <div>
            <h1 className="font-bold text-[24px] text-nowrap mb-[10px]">
              한국공학대학교
            </h1>
            <p>2018.03 - 2022.08</p>
            <p className="mb-5">IT경영 전공 | 미디어디자인공학 부전공</p>
            <p className="text-lg font-light">
            ⦁ IT 경영학과에서 주로 웹 개발이나 데이터베이스 위주의 수업을
              들었습니다.
            </p>
            <p className="text-lg font-light">
            ⦁ 미디어디자인공학과에서 웹/앱 프로토타입 디자인 및 UX를
              공부했습니다. (웹디자인 / 모바일 디자인)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
