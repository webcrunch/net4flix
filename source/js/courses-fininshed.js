const user = JSON.parse(localStorage.getItem("session"));
const chapters = JSON.parse(localStorage.getItem("chapters"))


const populateData = () => {
    document.querySelector('h2').innerHTML = `${user.first_name}  ${user.last_name}`;
    document.querySelector('h3').innerHTML = `${user.email}`;

    let ul = document.querySelector('.chapters');
    
    
    
    chapters.forEach(chapt => {
        let li = document.createElement("li");
        
    li.appendChild(document.createTextNode(`${chapt.name} - 0%`));
        ul.appendChild(li); 
        chapt.lession.forEach(less => {
            let ulInside = document.createElement("ul");
            ul.appendChild(ulInside);
                let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${less.name} - 0%`));
            ulInside.appendChild(li);
        })
    })
    
    // ul.innerHTML += `<li> four </li>`;
    
}



document.addEventListener('DOMContentLoaded', populateData, false);