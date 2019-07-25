//document도 객체이고  많은 함수가있어
// const title=document.getElementById("title");
const title =document.querySelector("#title");
const CLICKED_CLASS="clicked";
console.log(title);
console.dir(title);
console.dir(document);
console.error('ㅋㅋㅋ');

// object have many ,many keys !!! 

title.innerHTML=" I can change ~~ JS is powerful";
title.style.color="blue";
document.title=" Hi Hi you can do"



//prompt 는 매우 오래되고 이제 섹시 하지않아서 쓰지않는다구해~ 하지만 아직 동작은 해


//색깔 체크하기 

const BASE_COLOR="bisque";
const OTHER_COLOR="rgb(30, 130, 76)"
function init(){
    title.style.color=BASE_COLOR;
    // title.addEventListener("click",handleClick);
    title.addEventListener("mouseenter",handleClick);

}
init();

// //Javascript is made to react to the event 
// // Javascript is ready to get  the event ! it's waiting ! 
// // 자바스크립트에게 어떠한 이벤트를 실행 시킬껀지를 알려줘야해

function handleResize(event){
    // console.log(event);
    // console.log("I have been resized");
}
function handleClick(){
    const currentColor=title.style.color;
    const currentClass=title.className;
    if(currentClass!==CLICKED_CLASS){
        title.className=CLICKED_CLASS;
    }
}
    if(currentColor===BASE_COLOR){
        title.style.color=OTHER_COLOR;
        
    }else{
        title.style.color=BASE_COLOR;
    }
    console.log(currentColor);

}

var connected = navigator.onLine;

console.log(connected);

function network(event) {

if (event.type=="offline"){
console .log("You lost connection");
}
if(event.type=="online"){
console.log("You are now back online");
console.log(new Date(event.timeStamp));
}
}
window.addEventListener("online",network);
window.addEventListener("offline",network);



// 이런 이벤트들을 어디에서 찾냐고 ??? html event MDN always use MDN 

// window.addEventListener("resize",handleResize());
//resize 될때 이벤트를 불러와라
// window.addEventListener("resize",handleResize);
// title.addEventListener("click",handleClick);

// //alert("I'm working I'm Javascript");
// console.log("I'm working I'm Javascript");
// const BW = true;
// //true and false is not string 
// const a = 2304;
// const what = "ehdgodgka💫"
// // let으로 초기화 해줘야한다.
// // a=2000
// let b = a - 239;
// console.log(BW);
// console.log(what);
// console.log("a:" + a + "//b:" + b);
// //변수쓸때 처음엔 const만 쓰고 나중에 필요할때만 let 써 


// // 어떻게 데이터를 정렬할까 ??
// // 1. array  2. object 
// //1. array


// const daysOfweeks = ["Mon", "Tue", "Wed", "Thurs", "Fri", true, 213];
// console.log(daysOfweeks);
// console.log(daysOfweeks[2]);


// const SooInfo = ["Soo", "20", true, "Jinju"];
// console.log(SooInfo);

// //2. object// label 을 붙여준다고 생각하면돼 
// const Soo = {
//   name: "Soo", age: 25, gender: "Female", isPretty: true,
//   favMovie: ["Aladin", "Spiderman"],
//   favfood: [{ name: "Kimchi", spicy: true }, { name: "fried chicken", spicy: false }]
// };
// console.log(Soo);
// console.log(Soo.isPretty);
// console.log(Soo.favfood[1]);
// console.log(console);
// //console도 objecy이고 log는 함수인거야 ! 

// //where console log come from??
// // built in funnction

// sayHello("Nicolas");


// //function and argument
// function sayHello(name) {
//   return `hello ${name}`;
//   // console.log("Hello~",name);
//   // console.log(`hello ${name}`);
// }
// const greetNicolas=sayHello("Nicol");

// console.log(greetNicolas);


// const calculator={
// plus: function(a,b){
//  return a+b;
// },
// minus: function(a,b){
//   return a-b;
// },
// multiply: function(a,b){
//   return a*b;
// },
// devide: function(a,b){
//   return a/b;
// },
// remain : function(a,b){
//   return a%b;
// },
// power: function(a,b){
//   return a**b;
// }
// }


// const plus =calculator.plus(5,5);
// const minus =calculator.minus(5,5);
// const multiply=calculator.multiply(5,5);
// const devide=calculator.devide(5,5);
// const remain=calculator.remain(5,5);
// const power=calculator.power(5,5);

// console.log(plus);
// console.log(minus);
// console.log(multiply);
// console.log(devide);
// console.log(remain);
// console.log(power);