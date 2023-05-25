const user = JSON.parse(localStorage.getItem("session"));
const chapters = JSON.parse(localStorage.getItem("chapters"))
const chapterFocused = localStorage.getItem("courseClicked");

const populateData = () => {
    document.querySelector('.titleCourse').innerHTML = `Courses for ${chapterFocused}`
    document.querySelector('h2').innerHTML = `User: ${user.first_name}  ${user.last_name}`;
    document.querySelector('h3').innerHTML = `Email: ${user.email}`;
    document.querySelector('.user_name').innerHTML = ` Log out: ${user.first_name} `;
    // document.querySelector('.user_name').addEventListener("click", logout())
    let ul = document.querySelector('.chapters');
    
    chapters.filter(chapt => chapt.course ===  chapterFocused).forEach(chapt => {
        let li = document.createElement("li");
            
        li.appendChild(document.createTextNode(`${chapt.name} `));
        let pros = document.createElement("PROGRESS");
            pros.setAttribute("value", "42");
        pros.setAttribute("max", "100");
        
        ul.appendChild(li); 
        ul.appendChild(pros);
        chapt.lession.forEach(less => {
            let ulInside = document.createElement("ul");
            ul.appendChild(ulInside);
            let li = document.createElement("li");
            let pros = document.createElement("PROGRESS");
            pros.setAttribute("value", "42");
            pros.setAttribute("max", "100");
            li.appendChild(document.createTextNode(`${less.name}`));
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