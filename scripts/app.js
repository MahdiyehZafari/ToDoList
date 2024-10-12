var $=document;
let myColor=$.querySelectorAll('.bt');
let colorRes;
myColor.forEach(function(color) 
{
    color.addEventListener('click',function(event)
    {
    colorRes=event.target.dataset.color;
    $.documentElement.style.setProperty('--theme-color',colorRes)
    })   
})