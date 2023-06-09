

const user = JSON.parse(localStorage.getItem("session"));
const chapters = JSON.parse(localStorage.getItem("chapters"))
const chapterFocused = localStorage.getItem("courseClicked");
const progress = JSON.parse(localStorage.getItem("progress"));
const populateData = () => {
   /*    document.querySelector('.titleCourse').innerHTML = `Courses for ${chapterFocused}`
     document.querySelector('h2').innerHTML = `User: ${user.first_name}  ${user.last_name}`;  */
    /* document.querySelector('h3').innerHTML = `Email: ${user.email}`; */
    // document.querySelector('.user_name').innerHTML = ` Log out: ${user.first_name} `;
    // document.querySelector('.user_name').addEventListener("click", logout())
  /*   let h1 = document.querySelector("h1");
    let h2 = document.querySelector("h2");
    let h3 = document.querySelector("h3");

    h1.innerHTML = `Courses for ${chapterFocused}`;
    h2.innerHTML = `User: ${user.first_name}  ${user.last_name}`;
    h3.innerHTML = `Email: ${user.email}`;

    let ul = document.querySelector('.chapters');
    let content = document.querySelector("content");
    console.log(content);
    let userInfo = document.createElement("div");

    userInfo.classList.add("userInfo");
    content.appendChild(userInfo);
    userInfo.appendChild(h1);
    userInfo.appendChild(h2);
    userInfo.appendChild(h3); */

}


/* 
    let userProgress = progress.filter(prog => user.id === prog.id)

    userProgress = userProgress[0];

       chapters.filter(chapt => chapt.course === chapterFocused).forEach(chapt => {


        let chapterDiv = document.createElement("div");
        chapterDiv.classList.add("chapter");
        let chapterTitle = document.createElement("div");
        chapterTitle.classList.add("chapter-title");
        chapterDiv.appendChild(chapterTitle);

        let lessonsDiv = document.createElement("div");
        lessonsDiv.classList.add("lessons");
       

        let progressEach = userProgress.progress.find(prog => prog["chapter-name"] === chapt.name);
        let lengthOfLessions = chapt.lession.length;
        let calculatingTotalLessions = progressEach.lessions.map(a => a.progress).reduce((a, b) => a + b, 0);
        let pros = document.createElement("PROGRESS");
        let calculatingProcent = calculatingTotalLessions / lengthOfLessions;
        pros.setAttribute("value", Number.isInteger(calculatingProcent) ? calculatingProcent : calculatingProcent.toFixed(1));
        pros.setAttribute("max", "100");
        ul.appendChild(chapterDiv);
        chapterTitle.appendChild(document.createTextNode(`${chapt.name} ${calculatingProcent === 100 ? '✓' : ''} `));
        chapterDiv.appendChild(lessonsDiv);


        chapterDiv.appendChild(pros);
        chapt.lession.forEach(less => {
            let lessEach = progressEach.lessions.find(prog => prog.name === less.name);
            let linkContainer = document.createElement("div");
            lessonsDiv.appendChild(linkContainer);
            let li = document.createElement("a");
            let pros = document.createElement("progress");
            pros.setAttribute("value", lessEach.progress);
            pros.setAttribute("max", "100");
            li.appendChild(document.createTextNode(`${less.name} ${(lessEach.progress == 100) ? '✓' : ''}`));
            linkContainer.appendChild(li);
            linkContainer.appendChild(pros);
        })
    })
    
}  

const logout = () => {
    localStorage.setItem("session", null);
    window.location.href = "/";
}




document.addEventListener('DOMContentLoaded', populateData, false);
 */

function toggleContent(element) {
    var lessons = element.nextElementSibling;
    var triangle = element.getElementsByClassName("triangle")[0];
    if (lessons.style.display === "none") {
      lessons.style.display = "block";
      triangle.classList.remove("rotated");
    } else {
      lessons.style.display = "none";
      triangle.classList.add("rotated");
    }
  }