const container=document.querySelector(".container");
let pixel;
let board=new Array();
const box=document.createElement("div");
box.classList.add("container")
function displayGrid(num=16)
{
    for(let i = 0; i < num*num ; i++)
    {
       pixel=document.createElement("div");
       pixel.classList.add("grid");
       box.appendChild(pixel);
       
       board.push(pixel);
    }
    container.appendChild(box);
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
function inputSize()
{
    let size;
    const btn=document.createElement("button");
    btn.textContent="size";
    btn.addEventListener("click",()=>{
     size=prompt("enter the grid size");
     if(size<100)
     {
       container.removeChild(box);
       displayGrid(size);
       changeColor()
     }
     else 
     {
       prompt("try a number less than 100");
     }
     
    })
    document.body.insertBefore(btn,container);

}


displayGrid();
changeColor();
inputSize()