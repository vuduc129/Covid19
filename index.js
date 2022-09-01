const controls = document.querySelectorAll('.music__control')
const audio = document.querySelector('audio')
const muted = document.querySelector('.muted')
const unmuted = document.querySelector('.unmuted')
const header = document.querySelector('.header')
const map = document.querySelector('.content__map')

unmuted.onclick=function(){
    document.querySelector('.unmuted.active').classList.remove('active')
    document.querySelector('.muted').classList.add('active')
    audio.pause()
}

muted.onclick = function(){
    document.querySelector('.muted.active').classList.remove('active')
    document.querySelector('.unmuted').classList.add('active')
    audio.play()
}

window.onscroll = function(){
    if(scrollY > 200){
        header.classList.add('visible')
    }else{
        header.classList.remove('visible')
    }

    if(scrollY > 800 && scrollY < 2000){
        map.classList.add('active')
    }else{
        map.classList.remove('active')
    }
}

const btns = document.querySelectorAll('.solution__show-more')
const cards = document.querySelectorAll('.solution__cards')

btns.forEach((btn,index)=>{
    btn.onclick=function(){
        const card = cards[index]
        if(card.classList.contains('active')){
            card.classList.remove('active')
            btn.innerText="Show more!"
        }else{
            card.classList.add('active')
            btn.innerText="Hide"
        }
    }
})


const openNavBarBtn =document.querySelector('.header__navbar-open')

openNavBarBtn.onclick=function(){
    if(openNavBarBtn.classList.contains('active') && (header.classList.contains('active')) ){
        openNavBarBtn.classList.remove('active')
        header.classList.remove('active')
    }else{
        openNavBarBtn.classList.add('active')
        header.classList.add('active')
    }
}
