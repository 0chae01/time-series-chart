# 원티드 프리온보딩 4주차 과제 - 개인

## 과제 목표

주어진 데이터를 기반으로 시계열 차트 만들기

## 개발 기간

2023.09.09 - 2023.09.13

## 프로젝트 로컬 실행 방법

```
$ git clone https://github.com/0chae01/time-series-chart.git
$ npm install
$ npm start
```

## 배포 링크

https://time-series-chart-0chae01.vercel.app

## 구현 화면

<div align="center" >
  
</div>


## 주요 기능

#### 1. 시계열 차트

- JSON 데이터의 key 값을 기반으로 한 시계열 차트를 제공합니다.
- 차트의 x축은 시간을 나타냅니다.
- Area 그래프의 y축은 value_area, Bar 그래프의 value_bar를 나타냅니다.
- 각 y축에는 대략적인 수치를 제공합니다.

#### 2. 호버 기능

- 차트에 마우스 호버 시 해당 구역의 시간, 지역(id), value_area, value_bar 데이터를 툴팁 형태로 제공합니다.

#### 3. 필터링 기능

- 필터 버튼으로 지역(id)을 선택하면 해당 데이터 구역이 하이라이트 처리됩니다.
- 특정 데이터 구역을 클릭 시에도 동일한 지역(id)의 데이터 구역이 하이라이트 처리됩니다.
- 여러 개의 필터 동시 적용도 가능합니다.
- 필터 초기화 버튼으로 적용된 모든 필터를 제거할 수 있습니다.
- Bar 그래프 또는 Area 그래프를 개별로 볼 수 있도록 그래프 타입 지정이 가능합니다.(그래프 우측 상단)

### +. 그래프 줌 기능

- 차트 하단의 브러시를 이용해 원하는 만큼의 데이터 범위를 탐색할 수 있습니다.

## 디렉토리 구조

```
📦src
 ┣ 📂api
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂types
 ┣ 📂utils
```

## 사용 기술 스택

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library

  <img src="https://img.shields.io/badge/React Router Dom-F44250?style=for-the-badge&logo=reactrouter&logoColor=white">  <img src="https://img.shields.io/badge/recharts-22b5bf?style=for-the-badge&logo=code.id&logoColor=white">
