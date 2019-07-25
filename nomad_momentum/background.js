const body=document.querySelector("body");
const IMG_NUMBER =3 ;
let imageNum;
// function handleImLoad(){
//     console.log ("finish loading");
// }
function getImage(Num){ // 이번호의 그림을 가지고 옵니다 
    const img=new Image();
    img.src=`./images/${imageNum}.jpg`;
    console.log(img.src);
    img.classList.add("bgImage");
    // img.addEventListener("loadend",handleImLoad);
    body.appendChild(img);

}
function init(){
  imageNum= Math.floor(Math.random()*IMG_NUMBER)+1; 
  console.log(imageNum);
  getImage(imageNum); 
}
init();