'use strict'; 

const t1Input = document.querySelector();
const t2Input = document.querySelector();

let rounds= [];
let multi = 0;
let total=0;

    let temp=0;
    function t1 (){
        let t1= 7;
        if (t1> -1 && t1 < 11){
            if(t1 === 10){
                multi= 2;
                console.log("pleno");
                if (multi !== 0){
                    multi--;
                    return (t1 * 2);
                }
                else{
                    return(t1);
                }
            
            }else{
                console.log('Siguiente tirada');
                if (multi !== 0){
                    return (t1 * 2);
                }
                else{
                    return (t1);
                }
        }
        }
        
    };
    temp = t1();
    console.log(temp);
    total += temp;

    function t2 (t1){
        let t2= 3;
        if(t1!==10){
            if (t2> -1 && t2<=(10-t1)){

                if(t1 + t2 === 10){
                    console.log("Semi pleno");
                    multi=1;
                    if (multi === 0){
                        multi--;
                        return(t2 * 2);}
                    else
                        return (t2);
                }else{
                    console.log('Terminar ronda');
                    multi = 0;
                    if (multi !== 0){
                        return (t2 * 2);}
                    else{
                        return (t2);}
                    
                    
                }
            }
        }
            
    };
    total += t2(temp);
    console.log(total);
}