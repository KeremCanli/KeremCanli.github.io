$(document).ready(function () {
    var datasetim = [
        {
            label: 'Çalıştığım Süreler',
            borderColor: 'rgb(0, 255, 0)',
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 3,
            data: [8, 5, 9, 8, 7, 6, 9, 6] //Çalıştığı sürelerin datası
        },
        {
            label: 'Ortalama Çalışma Saatleri',
            borderColor: 'rgb(255, 0, 0)',
            pointRadius: 5,
            pointHoverRadius: 3,
            data: [6, 7, 6, 7, 6, 7, 6, 7] //Ortalama Çalışma saatlerinin datası
        }];
    $('#ciroMoneyData').val();
    var personGainedMoney = parseInt($('#ciroMoneyData').text());//Satıcı kazandığı para
    var personAvarageMoney = 3000; //Kazanması Gereken para
    circleFunc(personGainedMoney, personAvarageMoney);
    workTimeDiagram(datasetim);
    $('.menuItem').click(function () {
        console.log(this);
        $(".menuItem").removeClass('menuItemClick');
        $(this).toggleClass('menuItemClick');
    });
    $("#onButton").click(function () {
        $("#offButton").removeClass('menuItemOffState');
        $("#onButton").toggleClass("menuItemOnState");
    });
    $("#offButton").click(function () {
        $("#onButton").removeClass('menuItemOnState');
        $("#offButton").toggleClass("menuItemOffState");
    });

    $('.paymentMethodATag').click(function () {
        $(".paymentMethodATag").removeClass('paymentMethodATagClick');
        $(this).toggleClass('paymentMethodATagClick');
    });

});

function circleFunc(personGainedMoney, personAvarageMoney) {
    var progressValue = (personGainedMoney / personAvarageMoney);
    $('#progressCircle').circleProgress({
        value: progressValue,
        size: 100,
        fill: {
            gradient: ["#39ff14"]
        }
    });
    $('#progressValue').text('%' + Math.round(progressValue * 100));
}

function workTimeDiagram(datasetim) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        pointRadius: 5,
        // Datalarımız
        data: {
            //Günler
            labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
            datasets: datasetim
        },
        options: {
            legend: {
                display: false, //Toptaki datayı gizler
                labels: {
                    fontColor: 'white',
                    fontSize: 16,
                    fontFamily: 'Arial'
                }
            },
            scales: {
                xAxes: [{
                    display: false //X-axisteki dataları göstermez
                }],
                yAxes: [{
                    display: false //Y-axisteki dataları göstermez
                }]
            }
        }

    });
}

function formSubmit() {
    //validate burda yapılır
    $("#paymentForm").submit();
}

/*$( "#paymentForm" ).submit(function( event ) {
  console.log($("input[name=paymentMethod]").val());
});*/