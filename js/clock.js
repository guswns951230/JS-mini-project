// clock 가져오기
const clock = document.querySelector("#clock");

// setInterval에 넣을 callback 함수
function getClock() {
  // 현재 시간을 가져오는 객체
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // clock 객체에 시간 추가
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  // return `${hours}:${minutes}:${seconds}`;
}
// 함수를 통해 시간 문자열을 할당
getClock();
// clock.innerHTML = getClock();

// setInterval을 이용해 1초마다 반복
setInterval(getClock, 1000);
// setInterval(() => {clock.innerHTML = getClock();}, 1000);
