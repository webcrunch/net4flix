

const users = localStorage.getItem("users");

const login = () => {
    
    document.querySelector('#login').addEventListener("submit", function (e) {
        e.preventDefault();
        let email = e.target[0].value;
        let password = e.target[1].value;
        // search the users for email and passwords
        let user = JSON.parse(users).find(user => user.email === email && user.password === password);
        
        if (user) {
            localStorage.setItem("session", JSON.stringify(user));
            window.location.href = "/source/html/pages/home/home.html"
        };
    });
}

document.addEventListener('DOMContentLoaded', login, false);
