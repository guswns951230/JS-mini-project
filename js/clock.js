// clock 가져오기
const clock = document.querySelector("#clock");

// setInterval에 넣을 callback 함수
function getClock() {
  // 현재 시간을 가져오는 객체
  const date = new Date();
  // 00:00:00 format을 맞추기 위해 String의 padStart 사용
  // 숫자형을 문자형으로 바꿀때 숫자를 연산할 일이 있는지 생각하고 바꾸자
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // clock 객체에 시간 추가
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  // return을 통해 현재 시간을 반환하는 방법
  // return `${hours}:${minutes}:${seconds}`;
}
// 함수를 통해 시간 문자열을 할당
getClock();
// clock.innerHTML = getClock();

// setInterval을 이용해 1초마다 반복
setInterval(getClock, 1000);
// setInterval(() => {clock.innerHTML = getClock();}, 1000);
