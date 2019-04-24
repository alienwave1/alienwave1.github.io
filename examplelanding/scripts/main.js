$(".header-button-more").click(function () {
    $('html, body').animate({
        scrollTop: $(".header-stripes").offset().top
    },
        700);
});

$(".content-first-next").click(function () {
    $('html, body').animate({
        scrollTop: $(".line").offset().top
    },
        700);
});

$(".content-second-next").click(function () {
    $('html, body').animate({
        scrollTop: $(".content-third").offset().top
    },
        710);
});