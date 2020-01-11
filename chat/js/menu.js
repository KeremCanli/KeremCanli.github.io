$(document).ready(function () {
    $(".link").click(function () {
        $(".link > .icon").removeClass("icon-active");
        $(this).children().addClass("icon-active");
    });
    $(".hamburger-menu-open").click(function () {
        $(this).css("display", "none");
        $(".hamburger-menu-close").css("display", "inline-block");
        $(".side-menu").removeClass("lg-hidden md-hidden sm-hidden");
    });
    $(".hamburger-menu-close").click(function () {
        $(this).css("display", "none");
        $(".hamburger-menu-open").css("display", "inline-block");
        $(".side-menu").addClass("lg-hidden md-hidden sm-hidden");
    });
    $(window).resize(function () {
        if ($(window).width() <= 1024) {
            $(".exit-button").css("display", "none");
            if ($(".side-menu").hasClass("lg-hidden"))
                $(".hamburger-menu-open").css("display", "inline-block");
            else
                $(".hamburger-menu-close").css("display", "inline-block");
        } else {
            $(".exit-button").css("display", "inline-block");
            $(".hamburger-menu-open").css("display", "none");
            $(".hamburger-menu-close").css("display", "none");
        }
    });
});