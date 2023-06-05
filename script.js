let chart = document.getElementById('worldChart').getContext('2d');
Chart.defaults.color = 'black';
var bulking = document.getElementById('bulking').addEventListener("click", bulking, false);
var cutting = document.getElementById('cutting').addEventListener("click", cutting, false);
var maintain = document.getElementById('maintain')
var weight = document.getElementById('weight');
var dropdown = document.getElementById('topdown');


function bulking() {
  dropdown.innerHTML = "Bulking";
  weight = weight.value;
  cals = weight * 23.5;
  document.getElementById('cals').innerHTML = 'Recommended cals ' + cals;
  

};

let bulkingChart = new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: ['carbs', 'fats', 'protein', 'sugars'],
      datasets: [{
        label: 'worldwide population in billions',
        data: [
          3.5*weight.value,
          .3*weight.value,
          1*weight.value,
          .3*weight.value,
        ],
        backgroundColor: ['#F4F1DE', '#51344D', '#3D405B'],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }]
    },
    options: {}
  });