const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generateTemplate = (todo) => {
  const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
  `;
  list.innerHTML += html;
  localStorage.setItem("todo", list.innerHTML);
};
//Add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
//delete todos
list.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  localStorage.setItem("todo", list.innerHTML);
});
//search Todos
// const seachTodos(term)=>{

// };
const filterTodos = (term) => {
  const todoText = list.children;

  Array.from(todoText)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      return todo.classList.add("filter");
    });

  Array.from(todoText)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      return todo.classList.remove("filter");
    });
  // localStorage.setItem("todo", );
};
search.addEventListener("keyup", () => {
  const term = search.value.toLowerCase();
  filterTodos(term);
});
if (localStorage.getItem("todo")) {
  var savedTodo = localStorage.getItem("todo");
  list.innerHTML = savedTodo;
}
