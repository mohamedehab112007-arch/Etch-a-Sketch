const container=document.querySelector(".container");
let pixel;
let board=new Array();
function displayGrid(num=16)
{
    for(let i = 0; i < num*num ; i++)
    {
       pixel=document.createElement("div");
       pixel.classList.add("grid");
       container.appendChild(pixel);
    }
}
function changeColor()
{
    const grids=document.querySelectorAll("grid");
    grids.forEach(function(element,index,array)
    {
     element.addEventListener("mouseenter",()=>{/* change the color*/});
    })
    
}

displayGrid();