// var app = {
//     settings: {
//         container: $('.calendar'),
//         calendar: $('.front'),
//         days: $('.weeks span'),
//         form: $('.back'),
//         input: $('.back input'),
//         buttons: $('.back button')
//     },

//     init: function () {
//         instance = this;
//         settings = this.settings;
//         this.bindUIActions();
//     },

//     swap: function (currentSide, desiredSide) {
//         settings.container.toggleClass('flip');

//         currentSide.fadeOut(900);
//         currentSide.hide();
//         desiredSide.show();

//     },

//     bindUIActions: function () {
//         settings.days.on('click', function () {
//             instance.swap(settings.calendar, settings.form);
//             settings.input.focus();
//         });

//         settings.buttons.on('click', function () {
//             instance.swap(settings.form, settings.calendar);
//         });
//     }
// }

// app.init();


const datePictcher = () => {
    let dateIndex = 0;
    // todo: fetch todays date
    const assignedFirst = document.querySelector("#day-date");
    const assigntSecond = document.querySelector("#month-year");
    const date = new Date();

    const monthYear = `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getFullYear()}`;
    const dayDate = `${["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]} ${date.getDate()}th`;
    assignedFirst.innerHTML = dayDate;
    assigntSecond.innerHTML = monthYear;

    currentMonthDays();
}


const currentMonthDays = () => {
    const date = new Date();
    const numberOfDaysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const startOfDayInMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const numberOfDaysInPreviusMonthsToShow = date.getDay();
    console.log(numberOfDaysInPreviusMonthsToShow);
    const endOfDayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);



}


datePictcher()
