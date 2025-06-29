// let btn1 = document.querySelector("#btn1")

// btn1.addEventListener("click",() =>{
//     console.log("button1 was clicked ");
    
// })

// btn1.addEventListener("click",(evt) =>{
//     console.log("button1 was clicked - handler1");    
// })

// btn1.addEventListener("click",() =>{
//     console.log("button1 was clicked - handler2");    
// })

// const handler3 = () => {
//     console.log("button1 was clicked - handler3");   
// }

// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click",() =>{
//     console.log("button1 was clicked - handler4");    
// })

// btn1.removeEventListener("click", handler3) 

let modeBtn = document.querySelector("#mode");
let body = document.querySelector('body');
let currMode = "light"; //the mode is light need to change to dark and wiseversa

modeBtn.addEventListener("click",() =>{
    if(currMode =="light"){
        currMode = "dark";
        body.classList.add('dark');
        body.classList.remove("light");
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector('body').classList.add("dark");
    }else{
        currMode = "light"
        body.classList.add('light');
        body.classList.remove("dark");
        // document.querySelector('body').style.backgroundColor = 'pink';
        // document.querySelector('body').classList.add("light");
    }
    console.log(currMode);
    
})