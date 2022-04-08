// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// // REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
  { id: 2, title: "gum", category: "Groceries", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  //"checked" is from user
  tasks.find((element) => element.id === taskId).done = checked;
  renderTasks(tasks, "tasks-list");

  // console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  tasks.push({
    id: tasks.length,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
  renderTasks(tasks, "tasks-list");
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
  //alert(tasks[2].id);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // let filteredTasks = tasks.filter(
  //   (element) => element.category === selectedCategory
  // );
  // renderTasks(filteredTasks, "tasks-list");

  let doneTasks = tasks.filter((element) => element.done);

  if (done) {
    renderTasks(doneTasks, "tasks-list");
  } else {
    renderTasks(tasks, "tasks-list");
  }

  // REMOVE ME: sample alert
  //alert(`Category: ${selectedCategory} | done: ${done}`);
}
