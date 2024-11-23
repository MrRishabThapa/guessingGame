let display0=document.getElementById("display0");
let myBtn=document.getElementById("guessBtn");
let display=document.getElementById("display");
let display2=document.getElementById("display1");
let max = 100;
let min=1;
let RandomNum = Math.floor(Math.random()* (max - min +1));
a = 0;
myBtn.onclick = function(){
    let data=document.getElementById("value").value;
    data = Number(data);
    
 

     
    

        if(data < 0 || data > 100){
            display.textContent = `Enter a Valid Number!`;
        }
        else if( isNaN (data)){
            display.textContent =`Enter a valid Number`;
        }
        else{
            a++;
                if (a  > 10) {
                    display0.textContent = `You have used 10 guesses!! game over`;
                } else {
                    display0.textContent = `You have used ${a} guess`;
                }
                
            
            if ( data > RandomNum ){
               
                display.textContent = `too high !!guess lower`;
                
              
    
              }
             else if ( data < RandomNum ){
                
                display.textContent = `too low !!guess higher`;
                
              
                
              }
              else{
                display.textContent = `Congratulation!! You Guessed Correctly .`;
                display2.textContent = `It took you ${a} attempts to guess ${RandomNum} Correctly `;
       
           
            }
          
        }


   


    
  
      
    
    
     }
    