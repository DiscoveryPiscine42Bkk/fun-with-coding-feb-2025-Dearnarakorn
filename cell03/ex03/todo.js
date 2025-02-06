const myNodelist = document.getElementById("ft_list");

// Create a new To-Do
function createToDo(txt) {
  const node = document.createElement("div");
  node.textContent = txt;

  node.addEventListener("click", function () {
    if (confirm(`Are you sure you want to delete: "${txt}"?`)) {
      myNodelist.removeChild(node);
      saveTasks();
    }
  });

  return node;
}

// Prompt for new To-Do
function popup() {
  const task = prompt("Enter a new task...");
  if (task && task.trim() !== "") {
    const newTask = createToDo(task.trim());
    myNodelist.prepend(newTask);
    saveTasks();
  }
}

// Save tasks to cookies
function saveTasks() {
  const tasks = [...myNodelist.getElementsByTagName("div")].map(x => x.textContent);
  document.cookie = "Tasks=" + encodeURIComponent(JSON.stringify(tasks)) + ";path=/";
}

// Load tasks from cookies
(function loadTasks() {
  const cookies = document.cookie.split(";").reduce((acc, pair) => {
    const [key, ...vals] = pair.trim().split("=");
    acc[key] = vals.join("=");
    return acc;
  }, {});

  if (cookies.Tasks) {
    JSON.parse(decodeURIComponent(cookies.Tasks)).forEach(task => {
      myNodelist.append(createToDo(task));
    });
  }
})();
