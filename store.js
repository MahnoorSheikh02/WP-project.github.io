const box = document.querySelectorAll('.boxdisp')[0];
console.log(box);
const okay = document.querySelectorAll('.okay')[0];
console.log(okay);
const ok = okay.querySelectorAll('.ok')[0];
console.log(ok);
ok.addEventListener('click' , ()=> {
    console.log('itsss working yohooo');
    box.style.display = "none";

})
//=================code for part 1============////
  const but1 = document.querySelectorAll('.but1')[0];
 // console.log(but1);
  let minus1 = but1.getElementsByClassName('minus1')[0];
 //console.log(minus1);
 let plus1 = but1.getElementsByClassName('plus1')[0];
 //console.log(plus1);
  let num = 0;
  const quantity1 = document.querySelectorAll('.quantity1')[0];
  //console.log(quantity1);

 //console.log('working');
 

 plus1.addEventListener('click', ()=>{

 
   num++;
   console.log(num);
    let store1 = quantity1.textContent = `${num}`;
   const gettotal = document.querySelectorAll('.total')[0];
  console.log(gettotal);
  //console.log(store1);
  const price1 = 1500;
  const total1 =  store1 * price1;
  gettotal.textContent = `${total1}`;
  function reduce1(total1,price1){
    console.log(total1,price1);
}

});
minus1.addEventListener('click' , () =>{
  if(num > 0){
    num--;
   
  }
   quantity1.textContent = `${num}`;
    //console.log('ya bhi chl raha');
});
//================code for part2===========
 
const but2 = document.querySelectorAll('.but2')[0];
 // console.log(but1);
  let minus2 = but2.getElementsByClassName('minus2')[0];
 //console.log(minus1);
 let plus2 = but2.getElementsByClassName('plus2')[0];
 console.log(plus2);
   num = 0;
  const quantity2 = document.querySelectorAll('.quantity2')[0];
  //console.log(quantity1);

 //console.log('working');
 

 plus2.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity2.textContent = `${num}`;
 })
minus2.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity2.textContent = `${num}`;
    console.log('ya bhi chl raha');
});

//=============code for part3======
const but3 = document.querySelectorAll('.but3')[0];
 // console.log(but1);
  let minus3 = but3.getElementsByClassName('minus3')[0];
 //console.log(minus3);
 let plus3 = but3.getElementsByClassName('plus3')[0];
 console.log(plus3);
   num = 0;
  const quantity3 = document.querySelectorAll('.quantity3')[0];
  //console.log(quantity3);

 //console.log('working');
 

 plus3.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity3.textContent = `${num}`;
 })
minus3.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity3.textContent = `${num}`;
    console.log('ya bhi chl raha');
});
/////////========p4=
const but4 = document.querySelectorAll('.but4')[0];
 // console.log(but4);
  let minus4 = but4.getElementsByClassName('minus4')[0];
 //console.log(minus4);
 let plus4 = but4.getElementsByClassName('plus4')[0];
 console.log(plus4);
   num = 0;
  const quantity4 = document.querySelectorAll('.quantity4')[0];
  //console.log(quantity4);

 //console.log('working');
 

 plus4.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity4.textContent = `${num}`;
 })
minus4.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity4.textContent = `${num}`;
    console.log('ya bhi chl raha');
});
//==============p5
const but5 = document.querySelectorAll('.but5')[0];
 // console.log(but5);
  let minus5 = but5.getElementsByClassName('minus5')[0];
 //console.log(minus1);
 let plus5 = but5.getElementsByClassName('plus5')[0];
 console.log(plus5);
   num = 0;
  const quantity5 = document.querySelectorAll('.quantity5')[0];
  //console.log(quantity5);

 //console.log('working');
 

 plus5.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity5.textContent = `${num}`;
 })
minus5.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity5.textContent = `${num}`;
    console.log('ya bhi chl raha');
});

//===============q6=============
const but6 = document.querySelectorAll('.but6')[0];
 // console.log(but1);
  let minus6 = but6.getElementsByClassName('minus6')[0];
 //console.log(minus1);
 let plus6 = but6.getElementsByClassName('plus6')[0];
 console.log(plus6);
   num = 0;
  const quantity6 = document.querySelectorAll('.quantity6')[0];
  //console.log(quantity1);

 //console.log('working');
 

 plus6.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity6.textContent = `${num}`;
 })
minus6.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity6.textContent = `${num}`;
    console.log('ya bhi chl raha');
});
/////========================q7
const but7 = document.querySelectorAll('.but7')[0];
 // console.log(but7);
  let minus7 = but7.getElementsByClassName('minus7')[0];
 //console.log(minus7);
 let plus7 = but7.getElementsByClassName('plus7')[0];
 console.log(plus7);
   num = 0;
  const quantity7 = document.querySelectorAll('.quantity7')[0];
  //console.log(quantity7);

 //console.log('working');
 

 plus7.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity7.textContent = `${num}`;
 })
minus7.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity7.textContent = `${num}`;
    console.log('ya bhi chl raha');
});
//======p8
const but8 = document.querySelectorAll('.but8')[0];
 // console.log(but1);
  let minus8 = but8.getElementsByClassName('minus8')[0];
 //console.log(minus1);
 let plus8 = but8.getElementsByClassName('plus8')[0];
 console.log(plus8);
   num = 0;
  const quantity8 = document.querySelectorAll('.quantity8')[0];
  //console.log(quantity1);

 //console.log('working');
 

 plus8.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity8.textContent = `${num}`;
 })
minus8.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity8.textContent = `${num}`;
    console.log('ya bhi chl raha');
});
/////////===p9
const but9 = document.querySelectorAll('.but9')[0];
 // console.log(but1);
  let minus9 = but9.getElementsByClassName('minus9')[0];
 //console.log(minus9);
 let plus9 = but9.getElementsByClassName('plus9')[0];
 console.log(plus9);
   num = 0;
  const quantity9 = document.querySelectorAll('.quantity9')[0];
  //console.log(quantity9);

 //console.log('working');
 

 plus9.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity9.textContent = `${num}`;
 })
minus9.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity9.textContent = `${num}`;
    console.log('ya bhi chl raha');
});

/////////===========p0
const but0 = document.querySelectorAll('.but0')[0];
 // console.log(but1);
  let minus0 = but0.getElementsByClassName('minus0')[0];
 //console.log(minus1);
 let plus0 = but0.getElementsByClassName('plus0')[0];
 console.log(plus0);
   num = 0;
  const quantity0 = document.querySelectorAll('.quantity0')[0];
  //console.log(quantity0);

 //console.log('working');
 

 plus0.addEventListener('click', () => {
   num++;
   console.log(num);
   quantity0.textContent = `${num}`;
 })
minus0.addEventListener('click' , () =>{
  if(num > 0){
    num--;
  }
   
   quantity0.textContent = `${num}`;
    console.log('ya bhi chl raha');
});
/*
const gettotal = document.querySelectorAll('.total')[0];
console.log(gettotal);
let total = quantity1.textContent+quantity2.textContent+quantity3.textContent+quantity4.textContent+quantity5.textContent+quantity6.textContent+quantity7.textContent+quantity8.textContent+quantity9.textContent+quantity0.textContent;
gettotal.textContent = `${total}`;

*/

/*
//=================================================================================================================

const cartButton = document.getElementsByClassName('cart-btn');

const listItems =document.getElementsByClassName('description-list');

const itemImg  = document.getElementsByClassName('individual-section');




const cart = document.querySelectorAll('.cart-info')[0];
console.log(cart);
const productImg = cart.querySelectorAll('.product-img')[0];
console.log(productImg);
const productName = cart.querySelector('.product-name');
console.log(productName);
const productPrice = cart.querySelectorAll('.product-price')[0];
console.log(productPrice);

//==================================================================================================================





for (let i = 0; i < cartButton.length; i++){
    const button = cartButton[i];
    console.log('hi');
    button.addEventListener('click', function(event){
        
       const img = itemImg[i].firstElementChild;
      const name = listItems[i].getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
      const color = listItems[i].getElementsByTagName('ul')[0].getElementsByTagName('li')[1];
      const price = listItems[i].getElementsByTagName('ul')[0].getElementsByTagName('li')[2];
      
      
      productImg.innerHTML=`<span>ahmed</span>`;
      console.log(productImg);

     /* console.log(img)
      console.log(name);
      console.log(color);
      console.log(price);
    });
};

 /*productImg = `<div class="product-img">${img}</div>`;
  productName = `<div class="product-name">${name}</div>`;
  productPrice = `<div class="product-price">${price}</div>`;
*/