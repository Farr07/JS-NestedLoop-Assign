                        // QUESTION 01

// let farr = 5;
// for(let i = 2;i<9;i++){
//     farr+=i;
//     // 7-10-14-19-25-32-40
// }
// document.write(farr)
                           

// let farr = 2;
// for(let i = 2;i<8;i++){
//     farr*=i;
//     // 4-12-48-240-1440-10,080
// }
// document.write(farr)

                        // QUESTION 02

// PRINT ALL ODD NUM FROM 0 TO 100 

// for(let i=0;i<=100;i++){
//     if(i%2 == 1){
//         document.write(i)
//     } 
// }

                        // QUESTION 03

// for(let i=1;i<=5;i++){
//     let star = "";
//     for(let f=1;f<=i;f++){
//         star=star+"*" ;
//     }
//     document.write(star);
// }                        


                        // QUESTION 04
let city=prompt("enter city")
 let cities=["karachi","lahore","multan","islamabad" ] ;
 let found=false;

 for(let i= 0 ;i < cities.length;i++){
    if(city===cities[i]){
        document.write(city," found");
        found=true;
        break;
    }
 }  
 
 if(!found){
    document.write(city,"not found")
 }
 

