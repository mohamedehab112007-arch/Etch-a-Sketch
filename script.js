const container=document.querySelector(".container");
let pixel;
let board=new Array();
const box=document.createElement("div");
function displayGrid(num=16)
{
    for(let i = 0; i < num*num ; i++)
    {
       pixel=document.createElement("div");
       pixel.classList.add("grid");
       container.appendChild(pixel);
       board.push(pixel);
    }
}
function changeColor()
{
    board.forEach(function(element,index,array)
   {
     element.addEventListener("mouseover",()=>{
      board[index].classList.toggle("grid");
       if((Math.random()*100)>50)
       {
         board[index].classList.add("option1");
       }
       else 
       {
         board[index].classList.add("option2");
       }

     })
     
   })
    
}


displayGrid();
changeColor();