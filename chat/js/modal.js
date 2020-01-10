$(document).ready(function () {
    var customSwal2Container2 = $(".custom-swal2-container-2");
    $(".operation-deneme").click(function () {
        customSwal2Container2.removeClass("custom-swal2-container-1");
    });
    $(".custom-swal2-close").click(function () {
        customSwal2Container2.addClass("custom-swal2-container-1");
    });
    $(".custom-swal2-cancel").click(function () {
        customSwal2Container2.addClass("custom-swal2-container-1");
    });
});