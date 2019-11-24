$(document).ready(function()
{ 
    var datasetim = [
        {
          label: 'Cevapladığım Konuşmalar',
          borderColor: 'dodgerblue',
          borderWidth:3,
          data: [150, 75, 75, 150, 225, 225, 75,150] //Çalıştığı sürelerin datası
        },
        {
          label: 'Ortalama Cevaplanan Konuşma',
          borderColor: 'black',
          borderWidth:3,
          data: [75, 150, 75, 225,75, 150, 225,75] //Ortalama Çalışma saatlerinin datası
        }];
        workTimeDiagram(datasetim);
});
function workTimeDiagram(datasetim)
{
  var ctx = document.getElementById('graphChart').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'line',
      pointRadius: 5,
      pointHoverRadius: 1,
      // Datalarımız
      data: {
        //Günler
          labels: ['01/11/2019', '02/11/2019', '03/11/2019', '04/11/2019', '05/11/2019', '06/11/2019', '07/11/2019'],
          datasets: datasetim
      },
      options: {
        maintainAspectRatio: false,
        
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              color: "#ccc"
            },
            scaleLabel: {
              display: true,
              labelString: 'Günler'
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: 'rgba(171,171,171,0.3)'
            },
            scaleLabel: {
              display: true,
              labelString: 'Mesaj Sayısı'
            }
          }]}
    }
      
  });
}