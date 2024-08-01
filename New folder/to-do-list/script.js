const todoList = [{
    name: 'Activa',
    dueDate: '2024-08-02'
},
{
    name: 'Apply Job',
    dueDate: '2024-08-02'
}];
renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html =
            `<div>${name}</div> 
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${index},1);
            renderTodoList();
            " class = "delete-todo-button">Delete</button>
            </div>`;
        todoListHTML += html;
    })
    // for (let i = 0; i < todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     // const name = todoObject.name;
    //     // const dueDate = todoObject.dueDate;
    //     // Destructuring
    //     const { name, dueDate } = todoObject;
    //     const html =
    //         `<div>${name}</div> 
    //         <div>${dueDate}</div>
    //         <button onclick="
    //         todoList.splice(${i},1);
    //         renderTodoList();
    //         " class = "delete-todo-button">Delete</button>
    //         </div>`;
    //     todoListHTML += html;
    // }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        // name:name,
        // dueDate: dueDate
        // Shorthand Property
        name,
        dueDate
    });
    inputElement.value = '';
    console.log(todoList);
    renderTodoList();
}