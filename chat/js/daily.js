$(document).ready(function () {
    var dailyMessagingDataset = [{
        borderColor: "#1e90ff",
        borderWidth: 3,
        data: [150, 75, 75, 150, 225, 225, 75, 150],
        label: "Cevapladığım Konuşmalar"
    }, {
        borderColor: "#000000",
        borderWidth: 3,
        data: [75, 150, 75, 225, 75, 150, 225, 75],
        label: "Ortalama Cevaplanan Konuşma"
    }];
    var dailyMessaging = $("#daily-messaging")[0];
    new Chart(dailyMessaging.getContext("2d"), {
        data: {
            datasets: dailyMessagingDataset,
            labels: [
                "01/11/2019",
                "02/11/2019",
                "03/11/2019",
                "04/11/2019",
                "05/11/2019",
                "06/11/2019",
                "07/11/2019"
            ],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        color: "#cccccc",
                        display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Günler"
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        color: "#ababab",
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Mesaj Sayısı"
                    }
                }]
            }
        },
        pointHoverRadius: 1,
        pointRadius: 5,
        type: "line"
    });
    var facebookMessengerChangeDataset = [{
        backgroundColor: "#ffffff",
        borderColor: "#0080ff",
        borderWidth: 3,
        data: [8, 5, 9, 8, 7, 6, 9, 6],
        pointHoverRadius: 3,
        pointRadius: 5
    }];
    var facebookMessengerChange = $("#facebook-messenger-change")[0];
    new Chart(facebookMessengerChange.getContext("2d"), {
        data: {
            datasets: facebookMessengerChangeDataset,
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
            },
            tooltips: {
                enabled: false
            }
        },
        type: "line"
    });
    var whatsappChangeDataset = [{
        backgroundColor: "#ffffff",
        borderColor: "#55d159",
        borderWidth: 3,
        data: [8, 5, 9, 8, 7, 6, 9, 6],
        pointHoverRadius: 3,
        pointRadius: 5
    }];
    var whatsappChange = $("#whatsapp-change")[0];
    new Chart(whatsappChange.getContext("2d"), {
        data: {
            datasets: whatsappChangeDataset,
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
            },
            tooltips: {
                enabled: false
            }
        },
        type: "line"
    });
});