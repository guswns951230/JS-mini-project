// todo 입력공간 가져오기
const todoInput = document.querySelector("#todo-form #todo");

// button -> click event로 실행
// button에 id를 주지 않았기 때문에, 노드로 접근하거나
// querySelector를 이용해 선택자로 접근하여 객체를 가져온다
const todoButton = todoInput.nextElementSibling;

// todo board 객체 가져오기
const todoBoard = document.querySelector("#todo-board");

// button의 event listener : click event
todoButton.addEventListener("click", addTodo);

function addTodo() {
  console.log("확인");
  // todoInput - value 값을 들고옴
  const text = todoInput.value;
  // 새로운 요소 생성
  // li, input type="checkbox", textNode, button
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textNode = document.createTextNode(text);
  const button = document.createElement("button");

  // todoInput.value값을 빈값으로
  todoInput.value = "";
  todoInput.focus();
  // button에 X 추가
  button.innerHTML = "X";
  // checkbox를 눌렀을 때 event listener 실행 : click
  checkbox.addEventListener("click", todoCheck);

  // li 요소 - input, textNode, button 추가
  li.appendChild(checkbox);
  li.appendChild(textNode);
  li.appendChild(button);
  // todoBoard - li 추가
  todoBoard.append(li);

  // x button을 눌렀을 때 event listener 실행 : click
  button.addEventListener("click", todoDelete);
}

// checkbox event listener에 들어갈 함수
function todoCheck(e) {
  const li = e.target.parentNode;
  if (e.target.checked) {
    li.style.color = "lightGray";
  } else {
    li.style.color = "white";
  }
}

// x button event listener에 들어갈 함수
function todoDelete(e) {
  // li 요소 삭제
  const li = e.target.parentNode;
  li.remove();
}
