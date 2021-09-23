
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

  if (checkButton.tagName == 'BUTTON'){

    const classesString = checkButton.classList.value;

    const classesArray = classesString.split(' ');
    const classesCommas = '.' + classesArray.join('.');

    const elem5 = document.querySelector(classesCommas);

    elem5.classList.toggle('active');

    /*
    // console.log('chart: ', chart);

    // eslint-disable-next-line no-undef
    chart.setDatasetVisibility(1, false); // hides dataset at index 1

    // eslint-disable-next-line no-undef
    chart.update(); // chart now renders with dataset hidden
    console.log('test01');
    */
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


const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector('ul');

  if (!listContainer) {
    listContainer = document.createElement('ul');
    listContainer.style.display = 'flex';
    listContainer.style.flexDirection = 'row';
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach(item => {
      const li = document.createElement('li');
      li.style.alignItems = 'center';
      li.style.cursor = 'pointer';
      li.style.display = 'flex';
      li.style.flexDirection = 'row';
      li.style.marginLeft = '10px';

      li.onclick = () => {
        chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement('span');
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + 'px';
      boxSpan.style.display = 'inline-block';
      boxSpan.style.height = '20px';
      boxSpan.style.marginRight = '10px';
      boxSpan.style.width = '20px';

      // Text
      const textContainer = document.createElement('p');
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  }
};


// eslint-disable-next-line no-undef
new Chart(ctx, {
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
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: 'legend-container',
      },
      legend: {
        display: false,
      }
    },
    legend: {
      display: false,
      labels: {
        fontColor: '#333'
      }
    }
  },
  plugins: [htmlLegendPlugin],
});
