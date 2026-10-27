# ohsangplay.github.io

오상플레이(OhsangPlay) 소개 사이트. GitHub Pages로 배포하고 `ohsangplay.com`에 연결합니다.

## 구성

| 파일 | 용도 |
| --- | --- |
| `index.html` | 홈. "만든 것들" 카드 목록은 `assets/sites.js`로 자동 생성 |
| `about.html` | 오상플레이 소개 (AdSense 심사용 글 콘텐츠) |
| `contact.html` | 문의 |
| `privacy.html` | 개인정보처리방침 (광고 쿠키·구글 로그인 포함, 스토어 등록 URL로도 사용) |
| `terms.html` | 이용약관 |
| `404.html` | 없는 주소 안내 |
| `ads.txt` / `app-ads.txt` | AdSense / AdMob 게시자 ID 등록용 (승인 후 주석 해제) |
| `robots.txt` / `sitemap.xml` | 검색 노출 |

## 사이트(게임) 추가하기

`assets/sites.js`의 배열에 항목을 추가합니다.

```js
{
  name: "야추",
  description: "주사위 다섯 개로 족보를 완성하는 주사위 게임입니다.",
  url: "https://yacht.ohsangplay.com",   // 비우면 "준비 중"으로 표시
  icon: "assets/icons/yacht.svg",        // 정사각형 이미지, 없으면 emoji/첫 글자
  tags: ["주사위"],
  platforms: ["web", "android"]          // web | android | ios
}
```

아이콘은 `assets/icons/`에 넣으세요. 지금 들어 있는 SVG는 임시 아이콘입니다.

## 남은 할 일

- [ ] 문의 이메일 주소 확정 → 모든 HTML의 `contact@ohsangplay.com` 교체
- [ ] 커스텀 도메인: Settings › Pages › Custom domain에 `ohsangplay.com` 입력 (DNS 연결 후)
- [ ] AdSense 승인 신청 → 각 HTML `<head>`의 AdSense 주석 해제 + `ads.txt` 게시자 ID 입력
- [ ] (선택) 사업자등록번호를 푸터에 표시하려면 주석 해제

