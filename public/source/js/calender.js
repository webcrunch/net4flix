let yearIndex = 0;
let monthIndex = 0;
let dateFortodos;
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
    return {
        status: checkForTodos.length > 0 ? true : false,
        length: checkForTodos.length
    }
}


const displayTodo = () => {
    const todoContainer = document.querySelector(".calendarTodo");
    const cssTodo = window.getComputedStyle(todoContainer);
    cssTodo.getPropertyValue("display") === 'block' ? document.querySelector("#newTodo").innerHTML = "new todo" : document.querySelector("#newTodo").innerHTML = "close"
    cssTodo.getPropertyValue("display") === 'none' ? todoContainer.style.display = 'block' : todoContainer.style.display = 'none';
}

const currentMonthDays = (date, currentMonth) => {
    dateFortodos = date; // global valriable for the curent date;
    const timeold = [];
    const time1 = [];
    const time2 = [];
    const time3 = [];
    const time4 = [];
    const time5 = [];
    const timesnew = [];
    const getFirstWeek = document.querySelector(".first");
    const getSecondWeek = document.querySelector(".second");
    const getThirdWeek = document.querySelector(".third");
    const getFourthWeek = document.querySelector(".fourth");
    const getFifthWeek = document.querySelector(".fifth");
    const previusMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    const currentDate = date.getDate();
    const previousLastNumberOfdayDayInMonth = previusMonth.getDate();
    const numberOfDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // gives the current months total days 
    const startOfDayInMonth = new Date(date.getFullYear(), date.getMonth(), numberOfDaysInMonth);
    const numberOfDaysInPreviusMonthsToShow = ["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"].indexOf(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][previusMonth.getDay()]) // how many day this week has with previus month
    const endOfDayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0); // end of this month day;
    const numberOfDaysFirstWeekThisMonthFromPrevMonth = numberOfDaysInPreviusMonthsToShow < 1 ? numberOfDaysInPreviusMonthsToShow : 7 - numberOfDaysInPreviusMonthsToShow; // how many days this week has with current month
    const numberOfDaysFirstWeekThisMonth = 7 - numberOfDaysFirstWeekThisMonthFromPrevMonth;
    const numberofSecondWeek = numberOfDaysFirstWeekThisMonth + 1;
    // add all previus dates
    getFirstWeek.replaceChildren();
    getSecondWeek.replaceChildren();
    getThirdWeek.replaceChildren();
    getFourthWeek.replaceChildren();
    getFifthWeek.replaceChildren();

    for (let i = previousLastNumberOfdayDayInMonth - previusMonth.getDay() + 1; i <= previousLastNumberOfdayDayInMonth; i++) {
        timeold.push(i)
    }

    for (let i = 1; i <= numberOfDaysFirstWeekThisMonth; i++) {
        time1.push(`${i < 10 ? "0" + i : i}`);
    }


    for (let i = numberofSecondWeek; i <= numberofSecondWeek + 6; i++) {
        time2.push(`${i < 10 ? "0" + i : i}`);
    }


    for (let i = numberofSecondWeek + 7; i <= numberofSecondWeek + 7 + 6; i++) {
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
        let badgeSpan = document.createElement("span");
        span.classList.add("last-month");
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let newMonth = month - 1;

        let todoshandling = await checkForTodos(time, new Date(year, newMonth, time))
        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");
        span.innerHTML = time;
        getFirstWeek.appendChild(span);
    })
    time1.forEach(async time => {
        let span = document.createElement("span");
        let badgeSpan = document.createElement("p");
        badgeSpan.classList.add("badge")
        span.classList.add("date");
        span.setAttribute("id", time);
        span.innerHTML = time;
        let todoshandling = await checkForTodos(time, date)
        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");

        getFirstWeek.appendChild(span);
    })

    time2.forEach(async time => {
        let span = document.createElement("span");
        let badgeSpan = document.createElement("p");
        badgeSpan.classList.add("badge");
        span.classList.add("date");
        span.setAttribute("id", time);
        span.innerHTML = time;
        let todoshandling = await checkForTodos(time, date)
        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");
        getSecondWeek.appendChild(span);
    })

    time3.forEach(async time => {
        let span = document.createElement("span");
        let badgeSpan = document.createElement("p");
        badgeSpan.classList.add("badge");
        span.classList.add("date");
        span.setAttribute("id", time);
        span.innerHTML = time;
        let todoshandling = await checkForTodos(time, date)
        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");
        getThirdWeek.appendChild(span);
    })

    time4.forEach(async time => {
        let span = document.createElement("span");
        let badgeSpan = document.createElement("p");
        badgeSpan.classList.add("badge");
        span.classList.add("date");
        span.setAttribute("id", time);
        span.innerHTML = time;
        let todoshandling = await checkForTodos(time, date)
        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");
        getFourthWeek.appendChild(span);
    })

    time5.forEach(async time => {
        let span = document.createElement("span");
        let badgeSpan = document.createElement("p");
        badgeSpan.classList.add("badge");
        span.classList.add("date");
        span.setAttribute("id", time);
        span.innerHTML = time;
        let todoshandling = await checkForTodos(time, date)
        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");
        getFifthWeek.appendChild(span);
    })

    timesnew.forEach(async time => {
        let span = document.createElement("span");
        let badgeSpan = document.createElement("p");
        badgeSpan.classList.add("badge")
        span.classList.add("last-month");
        span.innerHTML = time;
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let newMonth = month + 1;

        let todoshandling = await checkForTodos(time, new Date(year, newMonth, time))

        if (todoshandling.status == true) {
            span.classList.add("todoCircle")
            badgeSpan.innerHTML = todoshandling.length;
            span.appendChild(badgeSpan);
        }
        else {
            span.innerHTML = time;
        }
        if (currentMonth && time === currentDate) span.classList.add("active");
        getFifthWeek.appendChild(span);
    })

}


const getTodos = e => {
    const todoContainer = document.querySelector(".calendarTodo");
    const cssTodo = window.getComputedStyle(todoContainer);
    document.querySelector("#newTodo").innerHTML = "close"
    todoContainer.style.display = 'block';
    if (e.target.classList.contains("todoCircle")) {
        showtodos(e.target.id, dateFortodos)
    } else {
        addNewtodo(e.target.id, dateFortodos)
    }
}//


const newDrawCalender = () => {
    datePictcher(dateFortodos, true);
}

const getPrevMonth = e => {
    monthIndex--;
    let year = new Date().getFullYear();
    let month = new Date().getMonth();

    let negToPos = monthIndex * -1;
    let newMonth = month - negToPos;

    datePictcher(new Date(year, newMonth, 1), false)
}

const getNextMonth = e => {
    monthIndex++;
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let newMonth = month + monthIndex;
    datePictcher(new Date(year, newMonth, 1), false)
}

const todaysDate = () => {
    monthIndex = 0;
    datePictcher(new Date(), true)
}

const monthButtons = () => {
    setTimeout(() => { document.querySelectorAll(".date").forEach(box => box.addEventListener('click', getTodos, 0)); }, 1000);
    document.querySelector("#preMonth").addEventListener('click', getPrevMonth, 0)
    document.querySelector("#newTodo").addEventListener('click', displayTodo, 0)
    document.querySelector("#day-date").addEventListener('click', todaysDate, 0);
    document.querySelector("#postMonth").addEventListener('click', getNextMonth, 0)
}




document.addEventListener('DOMContentLoaded', init, false);
