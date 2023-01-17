/*jQuery(document).ready(function($) {

});*/

window.addEventListener('DOMContentLoaded', function () {
    //header hamburger
    try {
        let hamburgerBtn = document.querySelector('.app-header__hamburger'),
            header = document.querySelector('.app-header'),
            closeBtn = document.querySelector('.app-header__close');
        activeClass = 'active',
            lockClass = '_lock';

        if (hamburgerBtn && header && closeBtn) {
            hamburgerBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                header.classList.add(activeClass);
                document.body.classList.add(lockClass);
            })

            closeBtn.addEventListener('click', function () {
                document.body.classList.remove(lockClass);
                header.classList.remove(activeClass);
            })
        }

    } catch (e) {
        console.log('header hamburger menu error ', e);
    }

    //slinky
    try {
        $('#menu').addClass('slinky-menu');
        const slinky = $('#menu').slinky({
            speed: 300,
            resize: true,
        });
    } catch (e) {
        console.log('slinky lib error ', e);
    }

    //lazy background image
    try {
        let lazyBackgrounds = document.querySelectorAll(".lazy-background");

        if (lazyBackgrounds) {
            const backgroundObserve = new IntersectionObserver((entries, observe) => {
                const [entry] = entries;
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observe.unobserve(entry.target);
            });
            lazyBackgrounds.forEach(section => {
                backgroundObserve.observe(section);
            });
        }
    } catch (e) {
        console.log('Lazy background image error ', e);
    }

    //carousel
    try {
        let carouselHolder = document.querySelector('.app-carousel-holder'),
            carouselTrigger = carouselHolder.querySelectorAll('.app-carousel-trigger'),
            carouselItem = carouselHolder.querySelectorAll('.app-carousel-item'),
            activeClass = 'active';

        if (carouselTrigger) {
            carouselTrigger.forEach(item => {
                item.addEventListener('click', e => {
                    let current = e.target;

                    let closestTrigger = current.closest('.app-carousel-item');

                    if (closestTrigger.classList.contains(activeClass)) {
                        closestTrigger.classList.remove(activeClass);
                    } else {
                        carouselItem.forEach(el => {
                            el.classList.remove(activeClass);
                        })
                        closestTrigger.classList.toggle(activeClass);
                    }
                })
            })
        }

    } catch (e) {
        console.log('carousel error ', e);
    }

    //home video play btn - reveal iframe
    try {
        let iframeBtnTrigger = document.querySelectorAll('.app-philosophy__play'),
            activeClass = 'active';

        if (iframeBtnTrigger) {
            iframeBtnTrigger.forEach(item => {
                item.addEventListener('click', e => {
                    let current = e.target;
                    if (current.closest('.app-philosophy__item_img')) {
                        document.querySelector('.app-philosophy__item_img').classList.add(activeClass);
                    }
                });
            })
        }
    } catch (e) {
        console.log('reveal iframe error ', e);
    }

    //banners swiper
    try {
        let bannersSwiper = document.querySelector('.swiperBannersAutoplay');
        let bannersSwiperReverse = document.querySelector('.swiperBannersAutoplayReverse');

        if (bannersSwiper) {
            const swiper = new Swiper('.swiperBannersAutoplay', {
                spaceBetween: 20,
                loop: true,
                speed: 5000,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 0,
                },
            });
        }
        if(bannersSwiperReverse) {
            const swiper = new Swiper('.swiperBannersAutoplayReverse', {
                spaceBetween: 20,
                loop: true,
                speed: 5000,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 0,
                    reverseDirection: true,
                },
            });
        }

    } catch (e) {
        console.log('banners swiper error ', e);
    }

    //sidebar testimonials swiper
    try {
        let swiperItem = document.querySelector('.swiperSidebarTestimonials');

        if(swiperItem) {
            const swiper = new Swiper('.swiperSidebarTestimonials', {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            })
        }
    } catch (e) {
        console.log('sidebar testimonials swiper error ', e);
    }

    //testimonials swiper
    try {
        let swiperItem = document.querySelector('.swiperTestimonials');

        if (swiperItem) {
            const swiper = new Swiper('.swiperTestimonials', {
                // spaceBetween: 20,
                loop: true,
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

    } catch (e) {
        console.log('testimonials swiper error ', e);
    }

});


