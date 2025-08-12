# [토이프로젝트] 일본식 편지 쓰기

## 개요

- 입력한 내용을 기반으로 세로형 텍스트 이미지를 다운받을 수 있는 사이트입니다.
- 날짜를 입력하면 자동으로 일본 연호 방식으로 변경됩니다.(이러한 이유로 날짜는 1869년부터 선택 가능)
- 다국어 지원 기능을 사용했습니다.(한국어,일본어)
- 반응형 지원(이미지 다운로드 기능은 PC 버전에서만 가능)
- 애니메이션을 넣고, 순서를 제어하는 연습
- VAC 패턴(뷰/로직 분리)

## 개발 환경 및 사용 패키지

- React 18 + vite + typescript
- html2canvas + file-saver : 텍스트 이미지 생성 및 다운로드 용도
- i18next : 다국어 지원용도
- jotai : 상태 관리 라이브러리
- react-helmet-async : 이미지 프리 로드 용도
- react-responsive : 미디어쿼리 분기점 생성 용도
- antd : 빠른 UI 구성

## 파일구조

```
📦src
 ┣ 📂atom
 ┣ 📂components
 ┣ 📂config
 ┣ 📂hooks
 ┣ 📂locale
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂util
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
