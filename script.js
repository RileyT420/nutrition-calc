// CHARTS FOR CHART.JS
let bulkChart = document.getElementById('worldChart').getContext('2d');
let cutChart = document.getElementById('borldChart').getContext('2d');
let mainChart = document.getElementById('forldChart').getContext('2d');
Chart.defaults.color = 'black';

// CHART ELEMENTS FOR STYLING
let bulk = document.getElementById('worldChart');
let cut = document.getElementById('borldChart');
let main = document.getElementById('forldChart');

// DROPDOWN ITEMS FOR EVENT LISTENERS
var userGoal = document.getElementById('dropdown').addEventListener("change", updateGoal, false);
// var bulking = document.getElementById('bulking').addEventListener("click", bulking, false);
// var cutting = document.getElementById('cutting').addEventListener("click", cutting, false);
// var maintain = document.getElementById('maintain').addEventListener("click", maintain, false);
// var dropdown = document.getElementById('topdown');
var weight = document.getElementById('weight');
var carbs = document.getElementById('carbs')
var fats = document.getElementById('fats')
var sugars = document.getElementById('sugars')
var protiens = document.getElementById('protiens')

function bulking() {
	dropdown.innerHTML = "Bulking";
  weight = weight.value;
	cals = weight * 23.5;
  carbs = 3.5 * weight,
	fats = .3 * weight,
	protiens = 1 * weight,
	sugars = .3 * weight,
	document.getElementById('cals').innerHTML = 'Recommended cals ' + cals;
  	document.getElementById('carbs').innerHTML = 'Recommended carbs ' + carbs;
  	document.getElementById('fats').innerHTML = 'Recommended fats ' + fats;
  document.getElementById('sugars').innerHTML = 'Recommended sugars ' + sugars;
  document.getElementById('protiens').innerHTML = 'Recommended protiens ' + protiens;
	// Hide/Show appropriate charts
	cut.style.display = "none";
	main.style.display = "none";
	bulk.style.display = "block";
  bulkingChart.update();
};

function cutting() {
	dropdown.innerHTML = "Cutting";
    weight = weight.value;
	cals = weight * 11;
  carbs = 1.64 * weight,
	fats = .14 * weight,
	protiens = .47 * weight,
	sugars = .14 * weight,
	document.getElementById('cals').innerHTML = 'Recommended cals ' + cals;
   	document.getElementById('carbs').innerHTML = 'Recommended carbs ' + carbs;
  	document.getElementById('fats').innerHTML = 'Recommended fats ' + fats;
  document.getElementById('sugars').innerHTML = 'Recommended sugars ' + sugars;
  document.getElementById('protiens').innerHTML = 'Recommended protiens ' + protiens;
	// Hide/Show appropriate charts
	main.style.display = "none";
	bulk.style.display = "none";
	cut.style.display = "block";
  cuttingChart.update();
};

function maintain() {
	dropdown.innerHTML = "Maintain";
    weight = weight.value;
	cals = weight * 16;
	carbs = 2.38 * weight,
	fats = .2 * weight,
	protiens = .68 * weight,
	sugars = .2 * weight,
	document.getElementById('cals').innerHTML = 'Recommended cals ' + cals;
     document.getElementById('carbs').innerHTML = 'Recommended carbs ' + carbs;
  	document.getElementById('fats').innerHTML = 'Recommended fats ' + fats;
  document.getElementById('sugars').innerHTML = 'Recommended sugars ' + sugars;
  document.getElementById('protiens').innerHTML = 'Recommended protiens ' + protiens;
	// Hide/Show appropriate charts
	cut.style.display = "none";
	bulk.style.display = "none";
	main.style.display = "block";
  maintainChart.update();
};

let bulkingChart = new Chart(bulkChart, {
	type: 'doughnut',
	data: {
		labels: ['carbs', 'fats', 'protein', 'sugars'],
		datasets: [{
			label: 'worldwide population in billions',
			data: [
				3.5 * weight.value,
				.3 * weight.value,
				1 * weight.value,
				.3 * weight.value,
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

let cuttingChart = new Chart(cutChart, {
	type: 'doughnut',
	data: {
		labels: ['carbs', 'fats', 'protein', 'sugars'],
		datasets: [{
			label: 'worldwide population in billions',
			data: [
				1.64 * weight.value,
				.14 * weight.value,
				.47 * weight.value,
				.14 * weight.value,
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
let maintainChart = new Chart(mainChart, {
	type: 'doughnut',
	data: {
		labels: ['carbs', 'fats', 'protein', 'sugars'],
		datasets: [{
			label: 'worldwide population in billions',
			data: [
				2.38 * weight.value,
				.2 * weight.value,
				.68 * weight.value,
				.2 * weight.value,
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
