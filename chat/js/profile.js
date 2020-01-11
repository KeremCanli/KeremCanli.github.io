$(document).ready(function () {
    var dataset = [{
        backgroundColor: "#272421",
        borderColor: "#00ff00",
        borderWidth: 3,
        data: [8, 5, 9, 8, 7, 6, 9, 6],
        label: "Çalıştığım Süreler",
        pointHoverRadius: 3,
        pointRadius: 5
    }, {
        backgroundColor: "#272421",
        borderColor: "#ff0000",
        borderWidth: 3,
        data: [6, 7, 6, 7, 6, 7, 6, 7],
        label: "Ortalama Çalışma Saatleri",
        pointHoverRadius: 3,
        pointRadius: 5
    }];
    var chart = $("#chart")[0];
    new Chart(chart.getContext("2d"), {
        data: {
            datasets: dataset,
            labels: [
                "Pazartesi",
                "Salı",
                "Çarşamba",
                "Perşembe",
                "Cuma",
                "Cumartesi",
                "Pazar"
            ]
        },
        options: {
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            }
        },
        type: "line"
    });

    var giroMoney = parseInt($("#giro-money").text().split("$")[1]);
    var averageMoney = 3000;
    var progressValue = giroMoney / averageMoney;
    $("#circle-progress").circleProgress({
        fill: {
            gradient: ["#39ff14"]
        },
        size: 100,
        value: progressValue
    });
    $("#progress-value").text("Average: %" + Math.round(progressValue * 100));
    $(".left-menu-item").click(function () {
        $(".left-menu-item").removeClass("left-menu-item-active");
        $(this).addClass("left-menu-item-active");
        var id = $(this).parent().attr("id");
        $("div[data-group-id]").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
        $("div[data-group-id=" + id + "]").removeClass("lg-hidden md-hidden sm-hidden xl-hidden");
    });
    $(".right-menu-item").click(function () {
        $(".right-menu-item").removeClass("right-menu-item-active");
        $(this).addClass("right-menu-item-active");
    });
    $(".payment-input").click(function () {
        $(".payment").css("border", "1px solid #aaaaaa");
        $(".payment-input:checked").parent().css("border", "1px solid #37b349");
    });
});