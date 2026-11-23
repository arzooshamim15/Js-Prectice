console.log("Arzoo Shamim");

// let a = 2;
// let b =  10;
// console.log(a + b);  // addition
// console.log(a - b);  // substraction
// console.log(a * b);  // multiplication
// console.log(a / b);  // divide


// let userName = prompt("Enter Your Name");
// console.log("User Name", userName);


// let userAge = +prompt("Enter Your Age");
// if(userAge >= 18){
//     console.log("Welcome !")
// }else{
//     console.log("Not Eligible");
    
// }

// let lowernumber = Math.min(1,9,7,5,0);
// console.log(lowernumber);
// let uppernumber = Math.max(1,9,7,5,0);
// console.log(uppernumber);

// let check = +prompt("enter your number") 
// if(check % 2 ===0){
//     console.log("even :" ,check)
// }
// else{
//     console.log("odd :" ,check);
    
// }


// let marks = +prompt("enter your marks");
// if(marks === 90 || marks === 100){
//     console.log("A+");
// }
// else if(marks === 80){
//     console.log("A")
// }
// else if(marks === 70){
//     console.log("B")
// }
// else if(marks === 60){
//     console.log("C")
// }
// else if(marks === 50){
//     console.log("D")
// }
// else{
//     console.log("You Are Fail 😟")
// }

// ===================== Level 2 =====================


// for(var i = 1 ; i >=1; i++){
//     console.log(i)
// }


// var num = +prompt("Enter Your Table Number");

// for(var i = 1; i<= 10; i++){
//     let multiply = num + "x"+ i + "="+ num*i;
//     console.log(multiply);
    
// }
// 🏆 Level 2 Complete
// Tumne ye sab kar liya:
// - Reverse loop ✅
// - Even numbers ✅
// - Odd numbers ✅
// - Multiplication table ✅
// - for loop ki basic working ✅
// Ab Level 3 — Functions start karte hain.

// ========================= Level 3 =================


// function division (a,b){
//     if(b === 0){

//     console.log("Cannot divide by zero");
    
//     }else{
//         console.log(a/b)
//     }
// }
// division(20,0);


// function checkEvenOdd (a){
//     if(a % 2 ===0){

//     console.log("Even");
    
//     }else{
//         console.log("Odd")
//     }
// }
// checkEvenOdd(27);


// function findLargest(a,b,c){
//     if(a>b || a>c){
//         console.log("A" , a);
        
//     } else if(b>a||b>c){
//         console.log("B",b)
//     }
//     else{
//         console.log("C",c)
        
//     }
// }
// findLargest(20,45,35)



// function calculateParcentage(obtained,total){
//     console.log((obtained / total) *100);
    
// }
// calculateParcentage(450,500)


// function calculateGrade(marks){
//     if(marks >= 90){
//         console.log("A+");
//     }
//     else if(marks >= 80){
//         console.log("A");
//     }
//     else if(marks >= 70){
//         console.log("B");
//     }
//     else if(marks >= 60){
//         console.log("C");
//     }
//     else if(marks >= 50){
//         console.log("D");
//     }
//     else{
//         console.log("Fail");
//     }
// }

// calculateGrade(79);


// function calculator(a,b ,opreator){
//     if(opreator === "+"){
//         console.log(a + b);
//     } else if(opreator === "-"){
//         console.log(a-b);
//     }
//      else if(opreator === "*"){
//         console.log(a*b);
//     }
//     else if(opreator === "/"){
//         console.log(a/b);
//     }
//     else if(b === 0){
//         console.log("cannot divde by zero");     
//     }
//     else{
//         console.log("Not Valid Expression")
//     }
    
//     }
//     calculator(80 , 20 ,"+");


// fruits.pop()  // remove end
// fruits.unshift("Kiwi")  // add start
// fruits.shift() // start remove
// for(var i = 0; i< fruits.length; i++){
    //     console.log(fruits[i])
    // }
    //          let fruit = prompt("Enter fruit");
    
    // if(fruits.includes(fruit)){
        //     console.log("Yes Avilable :" , fruit);
        
        // }else{
            //         console.log("Not Avilable :" , fruit);
            
            // }
            
            // let fruits = ["Apple", "Banana", "Mango", "Orange"];

            // console.log(fruits.c(1,3));
            // console.log(fruits)



            // let fruits1 = ["Apple","Banana"];
            // let fruits2 = ["Mango","Grapes"];
            // console.log(fruits1.concat(fruits2));


            // let fruits = ["Apple", "Banana", "Mango", "Orange"];
            // console.log(fruits.join("-"));
            
            // console.log(fruits.reverse());

            let alphabets = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
];
            
            console.log(alphabets.sort());6