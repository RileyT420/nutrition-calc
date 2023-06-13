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
document.getElementById('dropdown').addEventListener("change", (event) => {
	var weight = document.getElementById('weight').value;
console.log("WEIGHT: " + weight);
	switch(event.target.value){
		case 'bulking': 
			cals = weight * 23.5;
			cut.style.display = "none";
			main.style.display = "none";
			bulk.style.display = "block";
			bulkingChart.data.datasets[0].data[0] = 3.5 * weight;
			bulkingChart.data.datasets[0].data[1] = .3 * weight;
			bulkingChart.data.datasets[0].data[2] = 1 * weight;
			bulkingChart.data.datasets[0].data[3] = .3 * weight;
			bulkingChart.update();
		break;
		case 'cutting':
			cals = weight * 11;
			main.style.display = "none";
			bulk.style.display = "none";
			cut.style.display = "block";
			cuttingChart.data.datasets[0].data[0] = 1.64 * weight;
			cuttingChart.data.datasets[0].data[1] = .14 * weight;
			cuttingChart.data.datasets[0].data[2] = .47 * weight;
			cuttingChart.data.datasets[0].data[3] = .14 * weight;
			cuttingChart.update();
		break;
		case 'maintain':
			cals = weight * 16;
			cut.style.display = "none";
			bulk.style.display = "none";
			main.style.display = "block";
      cuttingChart.data.datasets[0].data[0] = 2.38 * weight;
			cuttingChart.data.datasets[0].data[1] = .2 * weight;
			cuttingChart.data.datasets[0].data[2] = .68 * weight;
			cuttingChart.data.datasets[0].data[3] = .2 * weight;
      maintainChart.update();
		break;
		default:
			console.log("NONE");
	}
2.38
.2
.68
.2
	document.getElementById('cals').innerHTML = 'Recommended cals ' + cals;
});




// CHARTS //
let bulkingChart = new Chart(bulkChart, {
	type: 'doughnut',
	data: {
		labels: ['carbs', 'fats', 'protein', 'sugars'],
		datasets: [{
			label: 'worldwide population in billions',
			data: [
				3.5 * weight,
				.3 * weight,
				1 * weight,
				.3 * weight,
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
				1.64 * weight,
				.14 * weight,
				.47 * weight,
				.14 * weight,
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
				2.38 * weight,
				.2 * weight,
				.68 * weight,
				.2 * weight,
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