// 假设 tasks 是一个包含任务信息的数组
let tasks = [];

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    const addTaskForm = document.getElementById('add-task-form');
    addTaskForm.addEventListener('submit', handleAddTask); // 监听表单提交事件
    displayTasks(); // 初始化时显示任务列表
});

// 处理添加任务表单提交事件
function handleAddTask(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const taskNameInput = document.getElementById('task-name');
    const taskName = taskNameInput.value.trim(); // 获取输入的任务名称

    if (taskName !== '') {
        // 创建新任务对象并添加到任务数组中
        const newTask = { name: taskName, completed: false };
        tasks.push(newTask);

        displayTasks(); // 添加任务后刷新任务列表
        taskNameInput.value = ''; // 清空输入框
    }
}

// 显示任务列表
function displayTasks() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = ''; // 清空任务列表

    tasks.forEach(task => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = `Task: ${task.name}, Completed: ${task.completed ? 'Yes' : 'No'}`;
        taskListElement.appendChild(listItemElement);
    });
}
