// const elem = document.querySelector('div[id="foo"]');


const elem1 = document.getElementById('form__input');
const elemCalendar = document.querySelector('div.calendar');
console.log('elem1:', elem1);

elemCalendar.addEventListener('click', function(e){
  e.preventDefault();
  console.log('test');

  // eslint-disable-next-line no-undef
  const rangepicker = new DateRangePicker(elem1, {// eslint-disable-line no-unused-vars
    // ...options
    format: 'yyyy-mm-dd',
  });
});


const today = new Date();
const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(tomorrow);

document.getElementById('date-start').valueAsDate = today;
document.getElementById('date-end').valueAsDate = tomorrow;


// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
//
// today = mm + '.' + dd + '.' + yyyy;
// console.log(today);

// // eslint-disable-next-line no-undef
// const rangepicker = new DateRangePicker(elem2, {// eslint-disable-line no-unused-vars
//   // ...options
//   format: 'dd.mm.yyyy',
// });

const elem2 = document.getElementById('burger-menu');
const elem3 = document.querySelector('.sidebar');
// const elem4 = document.querySelector('.sidebar__list');

elem2.addEventListener('click', function(e){
  e.preventDefault();

  elem2.classList.toggle('close');
  elem3.classList.toggle('close');
  // elem4.classList.toggle('close');

});
