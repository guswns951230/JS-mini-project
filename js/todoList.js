// todo 입력공간 가져오기
const todoInput = $("#todo-form #todo");

// button -> click event로 실행
// button에 id를 주지 않았기 때문에, 노드로 접근하거나
// querySelector를 이용해 선택자로 접근하여 객체를 가져온다
const todoButton = todoInput.next();

// todo board 객체 가져오기
const todoBoard = $("#todo-board");

// button의 event listener : click event
todoButton.on("click", addTodo);

function addTodo() {
  console.log("확인");
  // todoInput - value 값을 들고옴
  const text = todoInput.val();
  // 새로운 요소 생성
  // li, input type="checkbox", textNode, button
  const li = $("<li>");
  const checkbox = $("<input>").attr("type", "checkbox");

  const textNode = $("<span>").html(text);
  const button = $("<button>");

  // li 요소 - input, textNode, button 추가
  li.append(checkbox).append(textNode).append(button);

  // todoBoard - li 추가
  todoBoard.append(li);

  // todoInput.value값을 빈값으로
  todoInput.val("");
  todoInput.focus();
  // button에 X 추가
  button.html("X");
  // checkbox를 눌렀을 때 event listener 실행 : click
  checkbox.on("click", todoCheck);

  // x button을 눌렀을 때 event listener 실행 : click
  button.on("click", todoDelete);
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
