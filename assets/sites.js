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
 *   platforms   : "web", "android", "ios" 중 해당하는 것 (선택)
 *   hidden      : true 로 두면 목록에 표시하지 않습니다 (선택)
 */
window.OHSANG_SITES = [
  {
    name: "4S 챌린지 - 숫자야구",
    description: "숨겨진 숫자 세 자리를 스트라이크와 볼 힌트로 추리하는 숫자야구 게임입니다.",
    url: "",
    icon: "assets/icons/baseball.svg",
    tags: ["퍼즐", "추리"],
    platforms: ["web", "android"]
  },
  {
    name: "말랑영웅전",
    description: "말랑말랑한 영웅들과 함께하는 캐주얼 게임입니다.",
    url: "",
    icon: "assets/icons/mallang.svg",
    tags: ["캐주얼"],
    platforms: ["web"]
  },
  {
    name: "야추",
    description: "주사위 다섯 개로 족보를 완성하는 주사위 게임입니다. 구글 계정으로 로그인해 기록을 이어갈 수 있습니다.",
    url: "",
    icon: "assets/icons/yacht.svg",
    tags: ["주사위", "보드게임"],
    platforms: ["web"],
    hidden: true
  }
];
