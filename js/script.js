
const elemFormInput = document.querySelector('#form__input');
const elemCalendar = document.querySelector('div.calendar');

elemCalendar.addEventListener('click', function(e){
  e.preventDefault();
  console.log('test');

  new DateRangePicker(elemFormInput, {
    // ...options
    format: 'yyyy-mm-dd',
  });
});


const today = new Date();
const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);

document.querySelector('#date-start').valueAsDate = today;
document.querySelector('#date-end').valueAsDate = tomorrow;


const elemBurgerMenu = document.querySelector('#burger-menu');
const elemSidebar = document.querySelector('.sidebar');

elemBurgerMenu.addEventListener('click', function(e){
  e.preventDefault();

  elemBurgerMenu.classList.toggle('close');
  elemSidebar.classList.toggle('close');

});



const elemButtonContainer = document.querySelector('.general__buttons');

elemButtonContainer.addEventListener('click', function(e){
  e.preventDefault();

  const checkButton = e.target;

  console.log('custom_index:', checkButton.getAttribute('chart-button-id'));
  // console.log('datasets:', chart.config._config.data.datasets);
  const chartButtonId = checkButton.getAttribute('chart-button-id');




  if (checkButton.tagName == 'BUTTON'){

    const classesString = checkButton.classList.value;

    const classesArray = classesString.split(' ');
    const classesCommas = '.' + classesArray.join('.');

    const elem5 = document.querySelector(classesCommas);

    elem5.classList.toggle('active');


    console.log('chart: ', chart);
    let datasetIndex = -1;

    for (const dataset in chart.config._config.data.datasets) {
      // console.log('dataset:', dataset);
      // console.log('index:', chart.config._config.data.datasets[dataset]);
      // console.log('label:', chart.config._config.data.datasets[dataset].label);

      const label = chart.config._config.data.datasets[dataset].label;

      if(chartButtonId == label){
        datasetIndex = dataset;

        break;
      }
    }

    console.log('elem5.classList: ', elem5.classList);
    console.log('test: ');

    // if (elem5.classList.contains('active')){
    //   console.log('is_active');
    // }

    elem5.classList.contains('active') ? chart.setDatasetVisibility(datasetIndex, true) : chart.setDatasetVisibility(datasetIndex, false); // hides dataset at index 1

    // eslint-disable-next-line no-undef
    chart.update(); // chart now renders with dataset hidden
    // console.log('test01');

  }

});


function closeModal() {
  document.querySelector('#overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
    console.log('test1');
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
    console.log('test2');
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
    console.log('test3');
  }
});

const ctx = document.querySelector('#myChart').getContext('2d');





// eslint-disable-next-line no-undef
const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    }
  },
});
