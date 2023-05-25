const user = JSON.parse(localStorage.getItem("session"));
const chapters = JSON.parse(localStorage.getItem("chapters"))
const chapterFocused = localStorage.getItem("courseClicked");
const progress = JSON.parse(localStorage.getItem("progress"));
const populateData = () => {
    document.querySelector('.titleCourse').innerHTML = `Courses for ${chapterFocused}`
    document.querySelector('h2').innerHTML = `User: ${user.first_name}  ${user.last_name}`;
    document.querySelector('h3').innerHTML = `Email: ${user.email}`;
    document.querySelector('.user_name').innerHTML = ` Log out: ${user.first_name} `;
    // document.querySelector('.user_name').addEventListener("click", logout())
    let ul = document.querySelector('.chapters');

    let userProgress = progress.filter(prog => user.id === prog.id)

    userProgress = userProgress[0];

    chapters.filter(chapt => chapt.course === chapterFocused).forEach(chapt => {
        let li = document.createElement("li");
        let progressEach = userProgress.progress.find(prog => prog["chapter-name"] === chapt.name);
        li.appendChild(document.createTextNode(`${chapt.name} `));
        let lengthOfLessions = chapt.lession.length;
        let calculatingTotalLessions = progressEach.lessions.map(a => a.progress).reduce((a, b) => a + b, 0);
        let pros = document.createElement("PROGRESS");
        let calculatingProcent = calculatingTotalLessions / lengthOfLessions;
        pros.setAttribute("value", Number.isInteger(calculatingProcent) ? calculatingProcent : calculatingProcent.toFixed(1));
        pros.setAttribute("max", "100");
        ul.appendChild(li);
        ul.appendChild(pros);
        chapt.lession.forEach(less => {
            let lessEach = progressEach.lessions.find(prog => prog.name === less.name);
            let ulInside = document.createElement("ul");
            ul.appendChild(ulInside);
            let li = document.createElement("li");
            let pros = document.createElement("progress");
            pros.setAttribute("value", lessEach.progress);
            pros.setAttribute("max", "100");
            li.appendChild(document.createTextNode(`${less.name} ${(lessEach.progress == 100) ? '✓' : null}`));
            ulInside.appendChild(li);
            ulInside.appendChild(pros);
        })
    })
}

const logout = () => {
    localStorage.setItem("session", null);
    window.location.href = "/";
}




document.addEventListener('DOMContentLoaded', populateData, false);