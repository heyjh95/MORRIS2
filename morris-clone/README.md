# MORRIS 메인 페이지 로컬 재현

`www.morris.co.kr/kr/` 메인 페이지를 원본 HTML·CSS·JS·이미지 그대로, 원본 경로 구조로 옮긴 학습용 사본입니다.

## 여는 방법

- `kr/index.html`을 브라우저로 바로 열거나, VS Code Live Server 등으로 `morris-clone/`을 열면 됩니다.
- 웹 폰트(Noto Sans KR, Manrope, Inter)는 Google Fonts에서 불러오므로 인터넷 연결이 필요합니다. Pretendard는 `fonts/`에 있습니다.

## 폴더 구조 (원본 사이트와 같음)

| 경로 | 내용 |
|---|---|
| `kr/index.html` | 메인 페이지 |
| `kr/css/`, `css/` | 원본 CSS (PC/태블릿/모바일, 공통, Swiper) |
| `js/` | 원본 JS (`common.js`, `main.js`, `swiper.js`), `js/lib/`에 jQuery·GSAP·SmoothScroll |
| `include/js/` | jQuery UI |
| `images/` | CSS·HTML에서 쓰는 공통 이미지 |
| `data/` | 비주얼, 제품, 카테고리, 브랜드, 게시판 이미지 |
| `fonts/` | Pretendard |

## 원본과 다른 점 (로컬에서 동작하게 하려고 바꾼 것만)

1. `kr/index.html` `<head>`에 `<meta charset="utf-8">` 추가. 원본은 서버 응답 헤더로만 UTF-8을 알려줘서, 로컬에서는 이 줄이 없으면 한글이 깨집니다.
2. `/images/...`처럼 사이트 루트 기준 경로를 상대 경로(`../images/...`)로 변경 (HTML, CSS). 어느 폴더에서 열어도 경로가 맞게 하기 위함입니다.
3. jQuery·GSAP·SmoothScroll을 CDN 대신 `js/lib/`의 같은 파일로 연결.
4. 브랜드 탭: 원본은 탭을 누를 때마다 서버(`_sec4_list.php`)에서 내용을 받아옵니다. 로컬에는 서버가 없으므로 4개 브랜드 응답을 미리 받아 `kr/index.html` 끝의 `<template>`에 넣고, `js/main.js`에서 그것을 읽도록 그 부분만 바꿨습니다.

메뉴·버튼의 다른 페이지 링크(`m21.php` 등)는 원본 주소 그대로라 로컬에서는 열리지 않습니다.
