'use strict'; 

const t1Input = document.querySelector();
const t2Input = document.querySelector();
const t3Input = document.querySelector();
const t4Input = document.querySelector();

    let temp=0;
    let total1=0;
    let total2=0;
    function t1 (){
        let t1= 7;
        if (t1> -1 && t1 < 11){
            if(t1 === 10){
                console.log("pleno");
                console.log("esconder boton t2 con hidden")
                    return (t1);
                }
               
            }else{
                console.log('Siguiente tirada');

                    return (t1);
                }      
        };

    temp = t1();
    console.log(temp);
    total1 += temp;

    function t2 (t1){
        let t2= 3;
        if(t1!==10){
            if (t2> -1 && t2<=(10-t1)){

                if(t1 + t2 === 10){
                    console.log("Semi pleno")
                    return(t2);
                }else{
                    console.log("Terminar ronda")
                    return (t2);}
                }}
            };
    total1 += t2(temp);
    console.log(total1);




    
    function t3 (){
        let t3= 7;
        if (t3> -1 && t1 < 11){
            
            if(t3 === 10){
                console.log("pleno");
                console.log("esconder boton t2 con hidden")
                    return (t3);
                }
               
            }else{
                console.log('Siguiente tirada');

                    return (t3);
                }      
        };

    temp = t3();
    console.log(temp);
    if(t1===10 || t1+t2===10) {
        total2 = (temp * 2);
    }else{total2=temp;}

    function t4 (t3){
        let t4= 3;
        if(t3!==10){
            if (t4> -1 && t4<=(10-t3)){

                if(t3 + t4 === 10){
                    console.log("Semi pleno")
                    return(t4);}
                }else{
                    console.log("Terminar ronda")
                    return (t4);}
                }
            };

            

    total2+= t4(temp);
    if( t1===10) {
        total2 += (temp * 2);
    }else{total2+=temp;}
    console.log(total2);