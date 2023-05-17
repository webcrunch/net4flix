

const users = localStorage.getItem("users");

const login = () => {
    
    document.querySelector('#post').addEventListener("submit", function (e) {
        e.preventDefault();
        let email = e.target[0].value;
        let password = e.target[1].value;
        // search the users for email and passwords
        let user = JSON.parse(users).find(user => user.email === email && user.password === password);
        
        if(user) window.location.href = "/";
    });
}

document.addEventListener('DOMContentLoaded', login, false);
