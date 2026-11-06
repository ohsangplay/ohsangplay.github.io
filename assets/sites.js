/*
 * 오상플레이 사이트/게임 목록
 * ------------------------------------------------------------
 * index.html의 "만든 것들" 영역은 이 배열로 자동 생성됩니다.
 * 새 사이트를 만들면 아래에 항목 하나만 추가하세요.
 *
 *   name        : 표시 이름 (필수)
 *   description : 한두 문장 소개. 광고 심사에 글 콘텐츠로 도움이 됩니다.
 *   url         : 이동할 주소. 비워 두면 "준비 중"으로 표시되고 링크가 걸리지 않습니다.
 *   icon        : 아이콘 이미지 경로 (assets/icons/ 아래 권장, 정사각형 PNG/SVG/WebP).
 *                 비워 두면 emoji 또는 이름 첫 글자로 대신 표시합니다.
 *   emoji       : 아이콘 이미지가 없을 때 쓸 이모지 (선택)
 *   tags        : 짧은 태그 목록 (선택)
 *   platforms   : "web", "android", "ios", "windows" 중 해당하는 것 (선택)
 *   page        : ohsangplay.com 안의 게임 소개 페이지 경로 (선택). 있으면 카드가 이 페이지로 연결됩니다.
 *   hidden      : true 로 두면 목록에 표시하지 않습니다 (선택)
 */
window.OHSANG_SITES = [
  {
    name: "상어집사",
    description: "친수공원에 놀러 온 작은 아기 상어의 집사가 되어 먹이와 운동, 애정으로 돌보는 도트 육성 게임입니다. 상어를 얼마나 크게 키웠는지 몸길이로 겨룹니다.",
    url: "https://shark-keeper.github.io/",
    icon: "assets/icons/sharkkeeper.png",
    tags: ["육성", "도트"],
    platforms: ["android"]
  },
  {
    name: "4S 챌린지 - 숫자야구",
    description: "숨겨진 숫자 네 자리를 스트라이크와 볼 힌트로 추리하는 숫자야구 게임입니다.",
    url: "https://4s-challenge.ohsangplay.com/",
    icon: "assets/icons/fourschallenge.png",
    tags: ["퍼즐", "추리"],
    platforms: ["web", "android"]
  },
  {
    name: "오늘도 야추",
    description: "주사위 다섯 개로 족보를 완성하는 주사위 게임입니다. 구글 계정으로 로그인해 기록을 이어갈 수 있습니다.",
    url: "https://yahchoo.ohsangplay.com/",
    page: "games/yahchoo.html",
    icon: "assets/icons/yahchoo.png",
    tags: ["주사위", "보드게임"],
    platforms: ["web"]
  },
  {
    name: "오늘도 당구",
    description: "4구·3구·포켓볼(8볼)을 혼자, 한 기기에서 둘이, 또는 온라인으로 치는 웹 당구 게임입니다. 당점·두께·힘에 따라 수구가 한 번 튕긴 뒤까지 경로를 보여 주는 안내선이 있습니다.",
    url: "https://danggu.ohsangplay.com/",
    icon: "assets/icons/danggu.svg",
    tags: ["당구", "스포츠"],
    platforms: ["web"]
  },
  {
    name: "한지붕 메모",
    description: "한지붕 시리즈. 초대코드 하나로 가족과 함께 쓰는 공유 메모장입니다. 글 메모와 체크리스트를 여럿이 동시에 고쳐도 안전하게 합쳐 저장합니다.",
    url: "https://api.ohsangplay.com/onehouse/memo/",
    icon: "assets/icons/onehouse-memo.png",
    tags: ["한지붕 시리즈", "공유 메모"],
    platforms: ["android", "ios"]
  },
  {
    name: "한지붕 가계부",
    description: "한지붕 시리즈. 초대코드 하나로 가족과 함께 쓰는 공유 가계부입니다. 달력과 카테고리 필터로 한 달 지출을 한눈에 볼 수 있습니다.",
    url: "https://api.ohsangplay.com/onehouse/budget/",
    icon: "assets/icons/onehouse-budget.png",
    tags: ["한지붕 시리즈", "공유 가계부"],
    platforms: ["android", "ios"]
  },
  {
    name: "딩동메모",
    description: "바탕화면에 붙여 두는 메모에 시간을 정해 두면, 그 시간에 화면 오른쪽 아래에 메신저처럼 ‘딩동’ 알림이 뜨는 Windows 메모 프로그램입니다. 메모는 내 PC에만 저장됩니다.",
    url: "https://osp-sticky-memo.github.io/",
    icon: "https://osp-sticky-memo.github.io/web/icon.png",
    tags: ["메모", "알림"],
    platforms: ["windows"]
  }
];
