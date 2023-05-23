

const checkIfusers = async () => !localStorage.getItem("users") ? localStorage.setItem("users", JSON.stringify(await fetchUsers())) : null;

const fetchUsers = async () => {
    return await (fetch('/assets/people.json')
        .then((response) => response.json()));
}

document.addEventListener('DOMContentLoaded', checkIfusers, false);