
const fetchAll = async (file) => {
    return await (fetch(`/assets/${file}.json`)
        .then((response) => response.json()))
}



const populateData = async () => {
    JSON.parse(localStorage.getItem("session")) !== null ? window.location.href = "/source/html/pages/home/home.html" : null;
    !localStorage.getItem("users") ? localStorage.setItem("users", JSON.stringify(await fetchAll('people'))) : null;
    !localStorage.getItem("todos") ? localStorage.setItem("todos", []) : null;
    !localStorage.getItem("courses") ? localStorage.setItem("courses", [{ name: "Introduction to DevOps Practices:", chapters: 4 }, { name: "Introduction to Agile Development:", chapters: 5 }]) : null;
    !localStorage.getItem("chapters") ? localStorage.setItem("chapters", JSON.stringify(await fetchAll('chapters'))) : null;
    !localStorage.getItem("lessions") ? localStorage.setItem("lessions", JSON.stringify(await fetchAll('lessions'))) : null;
    !localStorage.getItem("session") ? localStorage.setItem("session", null) : null;
    !localStorage.getItem("courseClicked") ? localStorage.setItem("courseClicked", null) : null;
    !localStorage.getItem("progress") ? localStorage.setItem("progress", JSON.stringify(await fetchAll('progress'))) : null;
    let lessions = JSON.parse(localStorage.getItem("lessions"));
    let chapters = JSON.parse(localStorage.getItem("chapters"));

    chapters.forEach(chapter => {
        lessions.forEach(lession => {
            if (lession.chapter === chapter.name) chapter.lession.push(lession);
        })
    })
    localStorage.setItem("chapters", JSON.stringify(chapters))
    setTimeout(() => {
        window.location.href = "source/html/pages/login/login.html"
    }, "90");
}

document.addEventListener('DOMContentLoaded', populateData, false);
