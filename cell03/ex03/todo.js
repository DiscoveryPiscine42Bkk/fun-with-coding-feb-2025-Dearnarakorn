window.onload = function() {
    loadTasks();
};

document.getElementById("newBtn").addEventListener("click", function() {
    let task = prompt("Enter your task:");
    if (task && task.trim() !== "") {
        addTask(task);
        saveTasks();
    }
});

function addTask(taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.textContent = taskText;

    taskDiv.addEventListener("click", function() {
        if (confirm(`Are you sure you want to delete "${taskText}"?`)) {
            taskDiv.remove();
            saveTasks();
        }
    });

    const ftList = document.getElementById("ft_list");
    ftList.prepend(taskDiv); 
}

function saveTasks() {
    const tasks = [...document.querySelectorAll("#ft_list div")].map(task => task.textContent);
    document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + ";path=/";
}

function loadTasks() {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key.trim()] = value;
        return acc;
    }, {});

    if (cookies.tasks) {
        const tasks = JSON.parse(decodeURIComponent(cookies.tasks));
        tasks.reverse().forEach(task => addTask(task));
    }
}
