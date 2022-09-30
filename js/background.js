// 배경이미지를 배열에 저장
const images = ["back0.jpg", "back1.jpg", "back2.jpg"];

// random 함수
// 배열 > 요소를 넣어주면 인덱스 값으로 접근 가능
const randomNum = Math.floor(Math.random() * images.length);
const chooseImage = images[randomNum];

// body 객체 가져오기
const bodyBackground = document.querySelector("body");

// body에 이미지 추가
// css에서 이미지를 추가하는 방식과 동일
bodyBackground.style.background = `url(./img/${chooseImage})`;
