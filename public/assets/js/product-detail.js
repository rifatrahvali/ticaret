// product-detail sayfasındaki sol tarafta bulunan



// küçük görseller için 
const swiperThumbnail = new Swiper('.thumb-sliders', {
    speed: 400,
    spaceBetween: 10,
    navigation: {
        nextEl: ".thumb-next",
        prevEl: ".thumb-prev"
    },
    slidePerView:4,
    breakpoints:{
        // 320pixele kadar
        320:{
            slidesPerView:2,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:4,
        },
    },
});



// görsellerin slideri büyük olan
const swiperBig = new Swiper('.big-slider', {
    speed: 400,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    //zoom için aktif hale getirdik
    zoom: true,
    // görsel geçişlerinde efekt için
    effect:"fade",
    fadeEffect:{
        crossFade:true,
    },
    slidePerView:1,
    // küçük görsel olarak slider eklemek için
    // ismini verdik
    thumbs:{
        swiper:swiperThumbnail,
    },
});


$(document).ready(function () {
    $(".thumb-image").click(function () {
        // tıklanan image
        // vtden image thumb-imageye gelecek
        // biz aslında thumb-image clasına tıklamış oluyoruz.
        var index = swiperThumbnail.clickedIndex;

        if (index == swiperThumbnail.slides.length -1) {
            // tıklanan görsel array içerisindeki son görsel ise
            // en baştaki görsele kaydır
            swiperThumbnail.slideTo(0,500);
        } else {
            // değilse 500 ms içerisinde onu getir
            swiperThumbnail.slideTo(index,500);
        }
    })
})