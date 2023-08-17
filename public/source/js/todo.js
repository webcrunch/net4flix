
const fetchTodoData = async () => await JSON.parse(localStorage.getItem("todos"))

const handligTodos = () => {

    const myNodelist = document.getElementsByTagName("myUL");

    document.querySelector('.updateBtn').addEventListener("click", async function (e) {
        e.preventDefault();
        let todoA = await fetchTodoData();
        const close = document.querySelector('.editClose');
        const hidden = document.querySelector("#postId");
        let input = document.querySelector("#myInput").value;
        let date = document.querySelector("#date").value;
        const id = +hidden.value;
        const post = todoA.find(todo => todo.id === id);
        post.task = input;
        post.date = date;
        todoA[id] = post;
        localStorage.setItem("todos", JSON.stringify(todoA));
        let todoB = await fetchTodoData();
        let todoListDate = todoB.filter(td => td.date === date);
        close.style.display = 'none';
        hidden.value = null;
        document.querySelector('#myInput').value = null;
        document.querySelector('#date').value = null;
        const addButton = document.querySelector('.addBtn');
        const editButton = document.querySelector('.updateBtn')
        addButton.style.display = 'block';
        editButton.style.display = 'none';
        input.value = null;
        date.value = null;
        displayList(todoListDate);
        newDrawCalender();
    });

    document.querySelector('.addBtn').addEventListener("click", async function (e) {
        e.preventDefault();
        let todoA = await fetchTodoData();
        let input = document.querySelector("#myInput");
        let date = document.querySelector("#date");
        if (input.value.trim().length < 1 || date.value.trim().length < 1) return alert("error")
        let todo = {
            id: todoA.length,
            task: input.value,
            date: date.value
        };
        todoA.push(todo)
        localStorage.setItem("todos", JSON.stringify(todoA));
        let todoList = todoA.filter(td => td.date === date.value);
        input.value = null;
        date.value = null;
        handligTodos();
        displayList(todoList);
        newDrawCalender();
    });
}


const removePost = async (id, date) => {
    let todoBefore = await fetchTodoData();
    console.log(id, date, todoBefore);
    localStorage.setItem("todos", JSON.stringify(todoBefore.filter(todo => todo.id !== id)));
    let todoAfter = await fetchTodoData();
    let todoListDisplay = todoAfter.filter(td => td.date == date);
    console.log(todoListDisplay)
    displayList(todoListDisplay);
    newDrawCalender();
}

const addNewtodo = async (day, date) => {
    let first_ul = document.querySelector('#myUL');
    first_ul.replaceChildren();
    let rightMonth = date.getMonth() + 1;
    document.querySelector("#date").value = `${date.getFullYear()}-${rightMonth > 9 ? rightMonth : "0" + rightMonth}-${day}`
}

const showtodos = async (day, date) => {
    const rightMonth = date.getMonth() + 1;
    const checkDate = `${date.getFullYear()
        }-${rightMonth > 9 ? rightMonth : "0" + rightMonth}-${day}`
    let todoA = await fetchTodoData();
    document.querySelector("#date").value = `${date.getFullYear()}-${rightMonth > 9 ? rightMonth : "0" + rightMonth}-${day}`

    let checkForTodos = todoA.filter(td => td.date === checkDate);
    displayList(checkForTodos);
}

const editPost = async id => {
    let todoA = await fetchTodoData();
    const post = todoA.find(todo => todo.id === id);
    const close = document.querySelector('.editClose');
    const addButton = document.querySelector('.addBtn');
    const editButton = document.querySelector('.updateBtn')
    const inputText = document.querySelector('#myInput');
    const inputDate = document.querySelector('#date');
    const hidden = document.querySelector("#postId");
    hidden.value = post.id;
    inputText.value = post.task;
    inputDate.value = post.date;
    addButton.style.display = 'none';
    editButton.style.display = 'block';
    close.style.display = 'block';
    close.addEventListener("click", function (e) {
        inputText.value = null;
        inputDate.value = null;
        addButton.style.display = 'block';
        editButton.style.display = 'none';
        close.style.display = 'none';
        handligTodos()
    })
}

const displayList = arrayn => {
    let first_ul = document.querySelector('#myUL');
    first_ul.replaceChildren();
    arrayn.forEach(a => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        li.setAttribute('id', a.id);
        li.classList.add('todo-list');
        let spanForText = document.createElement("SPAN");
        let spanForDeletion = document.createElement("SPAN");
        spanForText.title = "Click here for edit the todo post";
        spanForDeletion.title = "Click here for remove the todo post";
        spanForText.setAttribute('id', a.id);
        spanForDeletion.setAttribute('id', a.id);
        let txt = document.createTextNode("\u00D7");
        spanForDeletion.className = "close";
        spanForDeletion.appendChild(txt);
        let name = document.createTextNode(` Task: ${a.task} - Date: ${a.date}   `);
        spanForText.appendChild(name);
        li.appendChild(spanForText);
        li.appendChild(spanForDeletion)
        ul.appendChild(li);
        first_ul.appendChild(ul);

        spanForText.addEventListener("click", function (e) {
            editPost(+e.target.id);
        })
        spanForDeletion.addEventListener("click", function (e) {
            removePost(+e.target.id, a.date);
        })
    })

}

document.addEventListener('DOMContentLoaded', handligTodos, false);