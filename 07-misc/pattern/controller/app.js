import Todo from '../model/todos.js';

var txtInput = document.getElementById("txtInput")
var btnAdd = document.getElementById("btnAdd")
var listContainer = document.getElementById("lists")
var todo = new Todo(listContainer);

// MVC
btnAdd.addEventListener("click", function (event) {
    todo.addTodo(txtInput.value)
})


// MVVM
// var todos = [];
// btnAdd.addEventListener("click", function () {
//     todos.push(txtInput.value);
//     console.log(todos)
// })