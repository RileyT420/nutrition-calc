let worldChart = document.getElementById('worldChart').getContext('2d');
Chart.defaults.color = 'black';
var bulking = document.getElementById('bulking')
var cutting = document.getElementById('cutting')
var maintain = document.getElementById('maintain')
var weight = document.getElementById('weight')
var run = document.getElementById('run')
run.addEventListener("click")

function bulking(){
if (bulking == true){
  cals = weight * 22;
  document.getElementById('cals').innerHTML = 'Recommended cals' + cals;
}
};
let massPopChart = new Chart(worldChart,{
      type:'doughnut',
      data:{
        labels:['carbs', 'fats', 'protien', 'sugars'],
        datasets:[{
        label:'worldwide population in billions',
        data:[
          7.07,
          7.16,
          7.25,
          7.34
        ],
        backgroundColor:['#F4F1DE', '#51344D', '#3D405B'],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
        }]
      },
      options:{}
});