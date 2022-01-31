$('.owl-carousel').owlCarousel({
    loop:true, //navegar de forma infinita
    margin:10, //margem entre os posters
    nav:false,  //botões de navegação
    responsive:{ //tudo o que está na página se adapta a tela, de acordo com o dispositivo
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5 // 5 posters
        }
    }
})