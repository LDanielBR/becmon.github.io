const menubar = document.querySelector('.menubar');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(menubar)


menubar.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != menubar){ 
            menu.classList.toggle("spread")
    }
})