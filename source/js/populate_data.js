
const fetchAll = async (file) => {
    return await (fetch(`/assets/${file}.json`)
        .then((response) => response.json()))
}

const populateData = async() => {
    !localStorage.getItem("users") ? localStorage.setItem("users", JSON.stringify(await fetchAll('people'))) : null;
    !localStorage.getItem("courses") ? localStorage.setItem("courses", [{ name: "Introduction to DevOps Practices:", chapters: 4 }, { name: "Introduction to Agile Development:", chapters: 5 }]) : null;
    !localStorage.getItem("chapters") ? localStorage.setItem("chapters", JSON.stringify(await fetchAll('chapters'))) : null;
    !localStorage.getItem("lessions") ? localStorage.setItem("lessions", JSON.stringify(await fetchAll('lessions'))): null;
    !localStorage.getItem("session") ? localStorage.setItem("session", null) : null;
    let lessions = JSON.parse(localStorage.getItem("lessions"));
    let chapters = JSON.parse(localStorage.getItem("chapters"));

    chapters.forEach(chapter => {
        lessions.forEach(lession => {
            if (lession.chapter === chapter.name) chapter.lession.push(lession);
        })
    })
    localStorage.setItem("chapters", JSON.stringify(chapters))
}

document.addEventListener('DOMContentLoaded', populateData, false);

window.location.href = "source/html/pages/login/login.html";
