"use strict";

const t1Input = document.querySelector("t1-js");
const t2Input = document.querySelector("t2-js");
const t3Input = document.querySelector("t3-js");
const t4Input = document.querySelector("t4-js");
const total1Input = document.querySelector("total1-js");
const total2Input = document.querySelector("total2-js");

let temp = 0;
let total1 = 0;
let total2 = 0;

function t1() {
    let t1 = t1Input.value;
    if (t1 > -1 && t1 < 11) {
      if (t1 === 10) {
        console.log("plenot1");
        console.log("esconder boton t2 con hidden");
        return t1;
      }else {
      console.log("Siguiente tirada");
      return t1;
    }
  }
}

temp = t1();
console.log(temp);
total1 += temp;

function t2(t1) {
    let t2 = t2Input.value;
    if (t1 !== 10) {
      if (t2 > -1 && t2 <= (10 - t1)) {
        if (t1 + t2 === 10) {
          console.log("Semi pleno");
          return t2;
        } else {
          console.log("Terminar ronda");
          return t2;
        }
      }
    }
  }

  let temp2 =t2(temp);
  total1 = temp + temp2;
  console.log(total1);




  function t3() {
    let t3 = t3Input.value;
    if (t3 > -1 && t3 < 11) {
      if (t3 === 10) {
        console.log("pleno");
        console.log("esconder boton t2 con hidden");
        return t3;
      }else {
      console.log("Siguiente tirada");
      return t3;
    }
  }
}


let temp3=t3();

if (temp === 10 || (temp + temp2) === 10 )
   { total2 = temp3 * 2;}
else{
    total2 = temp3;
}
console.log(total2);
function t4(t3) {
    let t4 = t4Input.value;
    if (t3 !== 10) {
      if (t4 > -1 && t4 <= (10 - t3)) {
        if (t3 + t4 === 10) {
          console.log("Semi pleno");
          return t4;
        } else {
          console.log("Terminar ronda");
          return t4;
        }
      }
    }
  }

  let temp4 =  t4(temp3);
  
  if (temp === 10 )
   { total2 = temp3 + (temp4 * 2);}
else{
    total2 += temp4;
};

console.log(total2);

let totalpuntos=total1 + total2;
