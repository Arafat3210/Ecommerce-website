// Navber hambaer

const navhamber = document.getElementById('navber')
function onToggleMenu(nav){
    nav.name = nav.name === 'menu' ? 'close' : 'menu'
    navhamber.classList.toggle('left-[0%]')
}

    // product-detils-Image

    var MainImg = document.getElementById('MainImg')
    var SmaillImg = document.getElementsByClassName('Smaill-Img')

    SmaillImg[0].onclick = function(){
        MainImg.src =SmaillImg[0].src;
        }
    SmaillImg[1].onclick = function(){
        MainImg.src =SmaillImg[1].src;
        }
    SmaillImg[2].onclick = function(){
        MainImg.src =SmaillImg[2].src;
        }
    SmaillImg[3].onclick = function(){
        MainImg.src =SmaillImg[3].src;
        }