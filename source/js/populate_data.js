
const courses = async () => !localStorage.getItem("courses") ? localStorage.setItem("courses", [{ name: "Introduction to DevOps Practices:", chapters: 4 }, { name: "Introduction to Agile Development:", chapters: 5 }]) : null;
const chapters = async () => !localStorage.getItem("chapters") ? localStorage.setItem("chapters", JSON.stringify(await fetchChapters())): null;
const checkIfusers = async () => !localStorage.getItem("users") ? localStorage.setItem("users", JSON.stringify(await fetchUsers())) : null;

const fetchUsers = async () => {
    return await (fetch('/assets/people.json')
        .then((response) => response.json()));
}

const fetchChapters = async () => {
    return await (fetch('/assets/chapters.json')
        .then((response) => response.json()));
}


document.addEventListener('DOMContentLoaded', checkIfusers, false);

window.location.href = "source/html/pages/login/login.html";
