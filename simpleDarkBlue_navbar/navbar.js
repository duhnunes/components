const menuMobile = document.querySelector('.menu-mobile');
const btnMob = document.getElementById('btnMobile');

btnMob.addEventListener('click', ()=> {
    console.log('Click');
    if(menuMobile.className == "menu-mobile"){
        menuMobile.className = "menu-mobile active"
        console.log('menu-mob');
    }else{
        menuMobile.className = "menu-mobile";
        console.log('active menu-mobile');
    }
})