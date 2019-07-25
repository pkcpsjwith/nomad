//입력폼
const todoForm=document.querySelector(".js-todoForm");
todoInput=todoForm.querySelector("input");
const todoList=document.querySelector(".js-todos")
// 
//local storage에 할일을 저장할 키 
const TODOS_LS="todoList";
let todoArr=[];


function handleSubmit(event){
event.preventDefault();
const currentValue=todoInput.value;
printTodo(currentValue);
todoInput.value="";


}
function saveTodo(){
    localStorage.setItem("todoList",JSON.stringify(todoArr));

}
function addTodo(){
//폼에 submit 이벤트 리스너 추가
todoForm.addEventListener("submit",handleSubmit);

}
function deleteToDO(){
    //그 버튼을 먼저 알아야하지 
    const whichBtn=event.target;
    // console.log(whichBtn);
    // console.dir(whichBtn);
    const parentElement= whichBtn.parentNode;
    console.log(parentElement);

    todoList.removeChild(parentElement);
    //로컬에 저장된 값도 변경해주기 
    const cleanToDos= todoArr.filter(function(todoObj){
        console.log(todoObj.id,parentElement.id);
        // 현재 삭제하기로 한것 제외하고 반환해주는 filter! 
        return todoObj.id !== parseInt(parentElement.id);
    } );
    console.log(cleanToDos);
    todoArr=cleanToDos;
    saveTodo();
}
function printTodo(text){
    console.log(text);
    const toDo=document.querySelector("ol");
    //이제 생성해보자
    //출력해줄 요소들을 만들어냅니다 .
    const li =document.createElement("li");

    const delBt=document.createElement("button"); 
    const span=document.createElement("span");
    const todoId=todoArr.length+1;
    // 출력해줄 요소들에 내용을 설정해줍니다. 
    delBt.innerText="✖";
    span.innerText=text;
    //실제로 넣어 출력해줍니다. 
    li.appendChild(span);
    li.appendChild(delBt);
    li.id=todoId;
    todoList.appendChild(li);
    const todoObj={content:text,id:todoId};
    todoArr.push(todoObj);
    console.log (todoArr);
    //버튼에 이벤트 부여하기 
    delBt.addEventListener("click",deleteToDO);
    // 데이터의 지속성을 위해서 local Storage 에이제 넣어줘야해 
    saveTodo();}


function loadTodo(){
const todoItem=localStorage.getItem(TODOS_LS);
console.log(todoItem);
if(todoItem!==null){
// JSON 으로 저장되어있는 todoList를 파싱을 해줘야해~ ! 
    const parsedTodo=JSON.parse(todoItem);
    parsedTodo.forEach(function(todo){
        printTodo(todo.content);
    });
}
}

function init(){
loadTodo();
addTodo();
}

init();