// 입력 form에 작성한 이름 가져오기 - form의 submit 이벤트 사용
const loginForm = document.querySelector("#login-form");

// name 값을 가져오기 위한 input
const loginInput = document.querySelector("#login-form #name");
// name을 가질 h1
const title = document.querySelector("#title");

// event listener 연결
// form의 submit을 사용할 경우 click event가 아니라
// form의 submit event로 연결
loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(e) {
  e.preventDefault();
  // loginInput의 value값을 가져옴
  const name = loginInput.value;

  // if문을 사용, name값이 없을 때 아래의 내용이 실행되지 않음
  // 함수에서 return을 사용하면 함수 종료
  if (name == "") {
    return;
  }
  // value값을 title에 넣어줌
  console.log(name);
  title.innerHTML = name + "님 반갑습니다.";
  // loginForm hidden class 추가
  loginForm.classList.add("hidden");
  // todo-form을 가져와 hidden class 제거
  document.querySelector("#todo-form").classList.remove("hidden");
}
