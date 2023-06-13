const fetchTodoData = async () => await JSON.parse(localStorage.getItem("todos"))
let yearIndex = 0;
let monthIndex = 0;
const displayCurrentDate = date => {
    const dayDate = `${["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]} ${date.getDate()}th`;
    const assignedFirst = document.querySelector("#day-date");
    assignedFirst.innerHTML = dayDate;
}

const init = () => {
    displayCurrentDate(new Date());
    datePictcher(new Date(), true)
}

const datePictcher = (date, thisMonth) => {
    const assigntSecond = document.querySelector("#month-year");

    const monthYear = `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getFullYear()}`;
    assigntSecond.innerHTML = monthYear;

    currentMonthDays(date, thisMonth);
    monthButtons();
}

const checkForTodos = async (day, date) => {
    let todoA = await fetchTodoData();
    let checkDate = new Date(date.getFullYear(), date.getMonth(), day).toDateString()
    let checkForTodos = todoA.filter(td => new Date(td.date).toDateString() === checkDate);
    return checkForTodos.length > 0 ? true : false;
}


const displayTodo = () => {
    const todoContainer = document.querySelector(".calendarTodo");
    const cssTodo = window.getComputedStyle(todoContainer);
    cssTodo.getPropertyValue("display") === 'none' ? todoContainer.style.display = 'block' : todoContainer.style.display = 'none';
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



    timeold.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");
        span.classList.add("last-month");
        span.innerHTML = time;
        getFirstWeek.appendChild(span);
    })
    time1.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");
        span.innerHTML = time;
        getFirstWeek.appendChild(span);
    })

    time2.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");

        span.innerHTML = time;
        getSecondWeek.appendChild(span);
    })

    time3.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");
        let span2 = document.createElement("span");
        let a = await checkForTodos(time, date);
        // span2.classList.add("test")
        span2.innerHTML = 1;
        if (currentMonth && time === currentDate) span.classList.add("active");
        // span.classList.add("todoCircle")
        span.innerHTML = time;
        // span.appendChild(span2);
        getThirdWeek.appendChild(span);
    })

    time4.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");
        span.innerHTML = time;
        getFourthWeek.appendChild(span);
    })

    time5.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        if (currentMonth && time === currentDate) span.classList.add("active");
        span.innerHTML = time;
        getFifthWeek.appendChild(span);
    })

    timesnew.forEach(async time => {
        let span = document.createElement("span");
        if (await checkForTodos(time, date) == true) span.classList.add("todoCircle")
        span.classList.add("last-month");
        span.innerHTML = time;
        getFifthWeek.appendChild(span);
    })



}

const getPrevMonth = e => {
    monthIndex--;
    console.log(monthIndex);
    // datePictcher(new Date(new Date().getFullYear, new Date().getMonth), false);
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    console.log(monthIndex - month, month);
    //datePictcher(new Date(year - yearIndex, month - monthIndex, 1), false)
}

const getPostMonth = e => {
    console.log(e);
}

const monthButtons = () => {
    document.querySelector("#preMonth").addEventListener('click', getPrevMonth, 0)
    document.querySelector("#newTodo").addEventListener('click', displayTodo, 0)
    // document.querySelector("#postMonth").addEventListener('click', getPostMonth, 0)
}




document.addEventListener('DOMContentLoaded', init, false);
