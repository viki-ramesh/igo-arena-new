function sliderPosition(windowSize) {


    if (windowSize.matches) { // If media query matches

        //for mobiles

        var swiper = new Swiper('.swiper', {

            mousewheelControl: true,
            effect: 'coverflow',
            grabCursor: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 105,
                modifier: 3,
                slideShadows: false,
            },
            loop: true,
            slideToClickedSlide: true,
            centeredSlides: true,
        })


        // progress bar

        $(function () {
            $('.raiseChart').easyPieChart({
                scaleLength: 0,
                lineWidth: 7,
                lineCap: 'round',
                barColor: '#FF5500',
                trackColor: "#888888",
                size: 95,
                animate: 1000,
                trackWidth: 7,
            });
        });



    } else {

        var swiper = new Swiper('.swiper', {
            direction: 'vertical',
            mousewheelControl: true,
            effect: 'coverflow',
            grabCursor: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 105,
                modifier: 1,
                slideShadows: false,
            },
            loop: true,
            slideToClickedSlide: true,

        })

        // progress bar

        $(function () {
            $('.raiseChart').easyPieChart({
                scaleLength: 0,
                lineWidth: 7,
                lineCap: 'round',
                barColor: '#FF5500',
                trackColor: "#888888",
                size: 160,
                animate: 1000,
                trackWidth: 7,
            });
        });
    }
}


var windowSize = window.matchMedia("(max-width: 768px)");
sliderPosition(windowSize) // Call listener function at run time
windowSize.addListener(sliderPosition)
