export const INFO = [
    {
        icon: "🏋️‍♀️",
        keyWord: "Responsibility",
        subTitle: "책임감이 강한 편입니다.",
        content:
            "프로젝트 진행 당시 팀장을 맡게 되었고 팀장으로서 프로젝트 관리뿐만 아니라 팀원을 챙기는 일도 필요하다고 생각했습니다. 어려움을 많이 느끼는 팀원분을 위해 오프라인에서 만나 페어 프로그래밍 형식으로 작업하였습니다. 그 결과 팀원분도 자신감을 얻고 함께 프로젝트를 잘 마무리 할 수 있었습니다.",
    },

    {
        icon: "👀",
        keyWord: "Interective",
        subTitle: "흥미로운 인터렉티브에 관심이 많습니다.",
        content:
            "사용자와 상호작용하고 사용자로 하여금 흥미를 이끌어내는 일에 관심이 많습니다. 지루하지 않고 사용자의 귀찮음을 덜어주는 서비스를 만들어 보고 싶습니다!",
    },

    {
        icon: "✏️",
        keyWord: "Recording",
        subTitle: "저만의 언어로 기록하는 것을 좋아합니다 →",
        link : "https://kanghyew0n.github.io/",
        content:
            "공부를 하며 알게 된 내용이나 프로젝트 회고 뿐만 아니라 어떻게 사용할 것이며 어떤 점이 좋았고 배웠던 감정을 저만의 언어로 기록하는 것을 좋아합니다. 제가 다시 볼 수 있도록 기록하기 때문입니다! 일주일에 하나씩은 깃허브에 업로드 하고 있습니다. ",
    },
];

export const REASON = [
    {
        title: [
            "저에게 중요한 가치는 성취감과 저 스스로의 발전입니다. ",
            "이것이 저의 원동력이기도 합니다.",
        ],
        content: [
            "디자인에 관심이 있어 부전공으로 미디어 디자인을 전공하였고 저에게 만족감이라는 가치를 주었습니다. 하지만 ",
            "코드를 구현하며 느끼는 성취감과 스스로의 발전에 더욱 큰 가치를 느끼게 되었습니다. ",
            "저에게 원동력이 되는 것은 만족감 보다는 성취감이었고 이것이 제가 계속해서 나아갈 수 있는 이유입니다.",
        ],
    },
    {
        title: ["재미있는 것을 좋아합니다."],
        content: [
            " 사용자의 상호작용에 따라 움직이는 인터렉션을 좋아하는 이유이기도 합니다. 또한 UX를 개선하는 것에 즐거움을 느끼며 더 나아가 DX를 높이기 위해 개발자들이 찾는 오픈소스를 구현해보고 싶기도 합니다.  ",
            "사용자에게 선한 영향력을 주며 개발자에게 인정받는 즐길 수 있는 개발자가 되고 싶습니다.",
        ],
       
    },
];

export const PROJECT = [
    {
        projectImage: "/assets/projectImages/hoverImage1.png",
        hoverProjectImage: "/assets/projectImages/mainImage1.png",
        projectName: "Seoul in petkage : 서울인펫키지",
        description: "서울시 반려동반 장소 공유 서비스",
        team: "Team",
        date: "2022/09/15 ~ 현재",
        detailDescription:
            "코드스테이츠를 수료하며 진행했던 프로젝트입니다. 서울인펫키지는 반려견을 키우고 있는 팀원들의 의견을 반영하여 제작을 시작하게 되었고, 사용자들의 장소 등록을 기반으로 운영되는 서비스로 기획했습니다.",
        githubLink: "https://github.com/codestates-seb/seb39_main_048",
        feStack: [
            "JavaScript,",
            "Vite,",
            "StyledComponent,",
            "React,",
            "SWR,",
            "Cloudinary,",
            "zustand",
        ],
        beStack: [
            "Java,",
            "spring,",
            "boot,",
            "spring,",
            "data,",
            "jpa,",
            "springsecurity",
        ],
    },

    {
        projectImage: "/assets/projectImages/hoverImage2.png",
        hoverProjectImage: "/assets/projectImages/mainImage2.png",
        projectName: "Toy Community",
        description: "커뮤니티 사이트",
        team: "Personal",
        date: "2022/10/19 ~ 2022/10/31  *사이트 방문 시 서버 로딩시간이 필요합니다!",
        detailDescription:
            "개인으로 백엔드와 프론트엔드 모두 맡아서 진행한 프로젝트입니다. 백엔드 부분은 강의를 보고 진행하였습니다. 로그인은 파이어베이스를 활용하였고 이미지는 네이버 클라우드를 활용하였습니다. 최근 TypeScript로 마이그레이션을 진행했습니다.",
        githubLink: "https://github.com/kanghyew0n/Toy-Community",
        serviceURL: "https://toy-community.herokuapp.com/",
        feStack: [
            "JavaScript,",
            "TypeScript",
            "React,",
            "Emotion,",
            "Redux-Toolkit"
        ],
        beStack: [
            "node.js,",
            "express,",
            "mongo DB,",
            "Mongoose,",
            "firebase"
        ],
    },

    {
        projectImage: "/assets/projectImages/hoverImage3.png",
        hoverProjectImage: "/assets/projectImages/mainImage3.png",
        projectName: "Kanghyew0n Portfolio",
        description: "포트폴리오 사이트",
        team: "Personal",
        date: "2022/11/18 ~ 2022/11/26",
        detailDescription:
            "현재 보고계신 포트폴리오 사이트입니다. 백엔드 없이 개인 프로젝트로 진행되었고 Next.js를 활용하여 파일 기반 라우터 처리를 하였고 작은 요소들에 애니메이션 효과를 주었습니다. 프로젝트 페이지 데이터같은 경우 파일을 따로 분리하여 불러오는 형식으로 진행되었습니다.",
        githubLink: "https://github.com/codestates-seb/seb39_main_048",
        serviceURL: "https://kanghyew0n.vercel.app/",
        feStack: [
            "JavaScript,",
            "Next.js,",
            "React,",
            "StyledComponent",
        ],
    },
];

export const BREAK_POINT_DESKTOP = 1024;
export const BREAK_POINT_TABLET = 768;
export const BREAK_POINT_PHONE = 500;
