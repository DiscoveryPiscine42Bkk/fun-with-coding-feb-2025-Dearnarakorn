function addTask() {
    let task = prompt("Enter a task:");
    if (task) {
        let li = document.createElement("li");
        li.textContent = task;
        li.onclick = function() {
            if (confirm("Remove this task?")) {
                this.remove();
            }
        };
        document.getElementById("taskList").appendChild(li);
    }
}
