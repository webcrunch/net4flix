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

    currentMonthDays(date, true);
    monthButtons();
}


const currentMonthDays = (date, currentMonth) => {
    const timeold = [];
    const time1 = [];
    const time2 = [];
    const time3 = [];
    const time4 = [];
    const time5 = [];
    const timesnew = [];
    const currentDate = date.getDate();
    const getFirstWeek = document.querySelector(".first");
    const getSecondWeek = document.querySelector(".second");
    const getThirdWeek = document.querySelector(".third");
    const getFourthWeek = document.querySelector(".fourth");
    const getFifthWeek = document.querySelector(".fifth");
    const previusMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    const previousLastDayInMonth = previusMonth.getDate();
    const numberOfDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const startOfDayInMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const numberOfDaysInPreviusMonthsToShow = ["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"].indexOf(["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"][startOfDayInMonth.getDay()]) // how many day this week has with previus month
    const endOfDayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0); // end of this month day;
    const numberOfDaysFirstWeekThisMonth = 7 - numberOfDaysInPreviusMonthsToShow; // how many days this week has with current month
    const numberofSecondWeek = numberOfDaysFirstWeekThisMonth + 1;
    // add all previus dates
    getFirstWeek.replaceChildren();
    getSecondWeek.replaceChildren();
    getThirdWeek.replaceChildren();
    getFourthWeek.replaceChildren();
    getFifthWeek.replaceChildren();
    for (let i = previousLastDayInMonth; i > previousLastDayInMonth - numberOfDaysInPreviusMonthsToShow; i--) {
        timeold.push(i)
    }

    for (let i = 1; i <= numberOfDaysFirstWeekThisMonth; i++) {
        time1.push(i);
    }

    for (let i = numberofSecondWeek; i <= numberofSecondWeek + 7; i++) {
        time2.push(i);
    }


    for (let i = numberofSecondWeek + 7; i <= numberofSecondWeek + 7 * 2; i++) {
        time3.push(i);
    }

    for (let i = numberofSecondWeek + 7 * 2; i <= numberofSecondWeek + 7 * 2 + 6; i++) {
        time4.push(i);
    }


    for (let i = numberofSecondWeek + 7 + 7 * 2; i <= numberOfDaysInMonth; i++) {
        time5.push(i);
    }

    for (let i = 1; i <= 7 - time5.length; i++) {
        timesnew.push(i);
    }



    timeold.forEach(time => {
        let span = document.createElement("span");
        span.classList.add("last-month");
        span.innerHTML = time;
        getFirstWeek.appendChild(span);
    })
    time1.forEach(time => {
        let span = document.createElement("span");
        span.innerHTML = time;
        getFirstWeek.appendChild(span);
    })

    time2.forEach(time => {
        let span = document.createElement("span");
        if (time === currentDate && currentDate) span.classList.add("active");
        span.innerHTML = time;
        getSecondWeek.appendChild(span);
    })

    time3.forEach(time => {
        let span = document.createElement("span");
        span.innerHTML = time;
        getThirdWeek.appendChild(span);
    })

    time4.forEach(time => {
        let span = document.createElement("span");
        span.innerHTML = time;
        getFourthWeek.appendChild(span);
    })

    time5.forEach(time => {
        let span = document.createElement("span");
        span.innerHTML = time;
        getFifthWeek.appendChild(span);
    })

    timesnew.forEach(time => {
        let span = document.createElement("span");
        span.classList.add("last-month");
        span.innerHTML = time;
        getFifthWeek.appendChild(span);
    })



}

const getPrevMonth = e => {
    currentMonthDays(new Date("2023-05-09"), false);
}

const getPostMonth = e => {
    console.log(e);
}

const monthButtons = () => {
    document.querySelector("#preMonth").addEventListener('click', getPrevMonth, 0)
    document.querySelector("#postMonth").addEventListener('click', getPostMonth, 0)
}




datePictcher()
