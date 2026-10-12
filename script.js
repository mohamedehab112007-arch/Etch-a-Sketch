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
displayGrid();