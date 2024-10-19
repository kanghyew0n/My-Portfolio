
export const PROJECT = [
  {
    id: 'qshop-editor',
    name: '큐샵 에디터 ',
    info: [{
      title: '(주) 스퀘어스',
    },
    {
      title: 'FE 3-4명, BE 1-2명',
    }],
    description: '드래그 드롭으로 웹사이트를 제작할 수 있도록 도와주는 노코드 웹빌더 서비스로 큐샵의 핵심 기능 중 하나입니다.',
    result: ['웹 빌더 핵심 기능인 그리드 기반의 드래그/드롭 및 json 데이터 구조 기반의 콘텐츠 커스터마이징 등 개발 및 유지보수',
      '폰트 수가 늘어나면서 초기 로딩 속도가 증가하는 문제가 발생, 기존 CSS 파일에서 폰트를 import하는 방식을 동적으로 폰트를 사용한 부분에서만 로딩하도록 변경하여 초기 로딩 속도 90% 개선',
      '프로젝트 내에 사용되지않는 코드나 불필요한 모듈이 로딩되는 문제 발견, 번들 사이즈를 분석 후 불필요한 모듈 제거, code split, Lazy loading을 사용하여 Entry Point File 크기 약 30% 감소',
      '디자인 시스템 기반으로 공통 컴포넌트 개발을 통해 코드와 유효성 검사의 일관성 유지 및 작업속도 개선',
      '웹 빌더 에디터 UI의 전반적인 수정 및 컴포넌트 구조 재 설계를 통해 사용자 편집영역 및 작업속도 개선'
    ],
    troubleShooting: [{
      title: '콘텐츠 사이즈가 정확하지 않은 문제 - 실시간 DOM 사이즈 변화를 감지하여 해결',
      link: 'https://gainful-maraca-c39.notion.site/d3303ff3f1e54f1681048e83bc38e36c'
    }, {
      title: '1000개 이상의 아이콘 실시간 검색으로 검색창 버벅거리는 문제 - 스크롤 이벤트 + useTransition으로 해결 ',
      link: 'https://gainful-maraca-c39.notion.site/d3303ff3f1e54f1681048e83bc38e36c'
    }, {
      title: '성능 개선의 필요성을 느껴 팀원분들께 발표한 성능최적화 관련 자료',
      link: 'https://gainful-maraca-c39.notion.site/d3303ff3f1e54f1681048e83bc38e36c'
    }],
    techStacks: ['React', 'Next Js', 'Scss', 'Recoil', 'ContextAPI', 'React-Query'],
    images: [{
      path: '/assets/thumbnail/editor.png',
      alt: 'editor 썸네일'
    }, {
      path: '/assets/project/qshop_editor_pc.png',
      alt: '큐샵 에디터 피씨'
    }, {
      path: '/assets/project/qshop_editor_mo.png',
      alt: '큐샵 에디터 모바일'
    }]
  },
  {
    id: 'qshop-homepage',
    name: '큐샵 홈페이지',
    info: [{
      title: '(주) 스퀘어스',
    },
    {
      title: 'FE 2명, BE 1-2명',
    }],
    description: '큐샵 자체 홈페이지로 가입, 구독결제, 사이트 템플릿 등을 제공합니다.',
    result: ['홈페이지 전반적인 기능 구현 및 반응형 디자인 개발 (네이버 로그인, 구독결제 등 전반적으로 참여)',
      '타이포그라피, 컬러 팔레트 및 컴포넌트 사이즈 등을 설정하여 일관된 디자인 시스템 구축',
      '홈페이지에서 사이즈가 큰 이미지와 데모영상을 사용하여 성능이 우려되어 라이트하우스 검사,  40점으로 낮게 나와  next의 image 태그 사용 및 dynamic import 적용하여 80점 후반으로 개선',
      '자동화 툴인 zapier 연동을 통해 사용자에게 자동화 기능 제공',
      '기존 회원을 feature os와 연동하여 사용자 피드백을 원활하게 받을 수 있는 환경 제공',
      '자동 배포 문서 보완 및 버전 업데이트를 포함한 배포 담당'
    ],
    troubleShooting: null,
    techStacks: ['React', 'Next Js', 'Emotion', 'Recoil', 'React-Query', 'React-Hook-Form'],
    images: [{
      path: '/assets/thumbnail/home.png',
      alt: 'homepage 썸네일'
    }, {
      path: '/assets/project/qshop_home_item.png',
      alt: '큐샵 홈페이지 zapier'
    }, {
      path: '/assets/project/qshop_home_pay.png',
      alt: '큐샵 홈페이지 featureos'
    }, {
      path: '/assets/project/qshop_home_template.png',
      alt: '큐샵 홈페이지 plan'
    }]
  }, {
    id: 'bead-buddies',
    name: 'Bead Buddies (비즈발 도안 제작소)',
    info: [{
      title: '2024.09 - 진행중',
    },
    {
      title: '개인 프로젝트',
    },
    {
      title: '🔗 Github',
      link: 'https://github.com/kanghyew0n/bead-buddies'
    },
    {
      title: '🔴 BeadBuddies 사이트',
      link: 'https://github.com/kanghyew0n/bead-buddies'
    },
    {
      title: '🎨 storybook',
      link: 'https://github.com/kanghyew0n/bead-buddies'
    }],
    description: `비즈발의 도안을 제작할 수 있는 서비스입니다. \n 비즈공예가 평소 취미였던 저는 비즈발 이라는 것을 접하게 되었고 만들고싶다는 생각을 했습니다. 하지만 비즈발 도안 제작을 엑셀 시트나 수작업으로 해야 한다는 사실을 알게 되었고 간단하게 도안을 제작할 수 있는 서비스를 만들게 되었습니다.`,
    result: ['디자인 시스템 정의, 스토리북을 도입하여 컴포넌트 관리 및 chromatic으로 스토리북 배포 및 git workflow에 자동배포 설정',
      'html2canvas 라이브러리의 node 캡쳐 기능을 사용하여 도안을 png로 저장 가능',
      '드래그로 격자를 채워 원하는 도안을 만들 수 있는 기능',
      'zustand를 활용하여 컬러 선택 및 컬러 리스트 관리'
    ],
    troubleShooting: null,
    techStacks: ['React', 'Next Js', 'Scss', 'Recoil', 'ContextAPI', 'React-Query'],
    images: [{
      path: '/assets/thumbnail/bead.png',
      alt: 'BeadBuddies 썸네일'
    }, {
      path: '/assets/project/bead_figma.png',
      alt: 'BeadBuddies 피그마'
    }, {
      path: '/assets/project/bead.png',
      alt: 'BeadBuddies'
    }]
  }
]
