
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteSpan = document.createElement('span');
    deleteSpan.textContent = '✖';
    deleteSpan.classList.add('delete');
    deleteSpan.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteSpan);
    taskList.appendChild(li);

    taskInput.value = '';
}