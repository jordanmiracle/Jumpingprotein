var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
})
;(function () {

    'use strict';


    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") !== -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") !== -1) ||
            (navigator.platform.indexOf("iPod") !== -1)
        );
    };

    // Main Menu Superfish
    var mainMenu = function () {

        $('#fh5co-primary-menu').superfish({
            delay: 0,
            animation: {
                opacity: 'show'
            },
            speed: 'fast',
            cssArrows: true,
            disableHI: true
        });

    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };


    // Offcanvas and cloning of the main menu
    var offcanvas = function () {

        var $clone = $('#fh5co-menu-wrap').clone();
        $clone.attr({
            'id': 'offcanvas-menu'
        });
        $clone.find('> ul').attr({
            'class': '',
            'id': ''
        });

        $('#fh5co-page').prepend($clone);

        // click the burger
        $('.js-fh5co-nav-toggle').on('click', function () {

            if ($('body').hasClass('fh5co-offcanvas')) {
                $('body').removeClass('fh5co-offcanvas');
            } else {
                $('body').addClass('fh5co-offcanvas');
            }


        });

        $('#offcanvas-menu').css('height', $(window).height());

        $(window).resize(function () {
            var w = $(window);


            $('#offcanvas-menu').css('height', w.height());

            if (w.width() > 769) {
                if ($('body').hasClass('fh5co-offcanvas')) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }

        });

    }


    // Click outside of the Mobile Menu
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('fh5co-offcanvas')) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }
        });
    };


    // Animations

    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '85%'});
    };

    var stickyBanner = function () {
        var $stickyElement = $('.sticky-banner');
        var sticky;
        if ($stickyElement.length) {
            sticky = new Waypoint.Sticky({
                element: $stickyElement[0],
                offset: 0
            })
        }
    };

    // Document on load.
    $(function () {
        mainMenu();
        parallax();
        offcanvas();
        mobileMenuOutsideClick();
        contentWayPoint();
        stickyBanner();
    });


}());

$(document).ready(function () {
    $("#header").fadeIn(3000);
});

$(window).load(function () {
    $(".h2").hide().fadeIn("");
});

document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
    let galleryView = document.getElementById("galleryView")
    let tilesView = document.getElementById("tilesView")
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        outer.classList.remove("outerActive");
        galleryView.style.display = "flex";
        tilesView.style.display = "none";

        while (tilesContainer.hasChildNodes()) {
            tilesContainer.removeChild(tilesContainer.firstChild)
        }
    } else {
        slider.classList.add("active");
        outer.classList.add("outerActive");
        galleryView.style.display = "none";
        tilesView.style.display = "flex";

        for (let i = 0; i < imgObject.length - 1; i++) {
            let tileItem = document.createElement("div");
            tileItem.classList.add("tileItem");
            tileItem.style.background = "url(" + imgObject[i] + ")";
            tileItem.style.backgroundSize = "contain";
            tilesContainer.appendChild(tileItem);
        }
    }
    ;
}

let imgObject = [
    "static/webapp/images/best-insects-in-bowl-carousel.webp",
    "static/webapp/images/older-gentleman-buckets.jpg",
    "static/webapp/images/women-working.webp",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";

    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";

    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";

    let linkTag = document.getElementById("linkTag")
    linkTag.href = imgObject[mainImg];

};

function scrollRight() {

    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length - 1)) {
        nextImg = 0;
    } else {
        nextImg++;
    }
    ;
    loadGallery();
};

function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;

    if (prevImg === 0) {
        prevImg = imgObject.length - 1;
    } else {
        prevImg--;
    }
    ;
    loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
        scrollLeft();
    } else if (e.keyCode === 39) {
        scrollRight();
    }
});

loadGallery();





