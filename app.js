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
};
search.addEventListener("keyup", () => {
  const term = search.value.toLowerCase();
  filterTodos(term);
});
