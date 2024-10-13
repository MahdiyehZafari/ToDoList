var $=document;
let myColor=$.querySelectorAll('.bt');
let colorRes;
myColor.forEach(function(color) 
{
    color.addEventListener('click',function(event)
    {
    colorRes=event.target.dataset.color;
    $.documentElement.style.setProperty('--theme-color',colorRes)
    })   
})

// todolist

// تابع برای بارگذاری تسک‌ها از لوکال استوریج
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        // const li = document.createElement('li');
        // li.textContent = task;
        // li.classList.add('d-flex', 'p-2' ,'justify-content-between', 'align-items-center', 'w-100', 'mx-auto', 'border', 'border-user', 'rounded-3')
        // li.addEventListener('click', () => {
        //     removeTask(index);
        // });
        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'del';
        // deleteButton.classList.add('btn','bg-user','d-flex','text-white','justify-content-center','align-items-center'); // اضافه کردن کلاس
        // deleteButton.addEventListener('click', (e) => {
        //     e.stopPropagation(); // جلوگیری از فعال شدن رویداد کلیک روی li
        //     removeTask(index);
        // });
        // li.appendChild(deleteButton);

        // // دکمه ویرایش
        // const editButton = document.createElement('button');
        // editButton.textContent = 'edit';
        // editButton.classList.add('btn','bg-user','d-flex','text-white','justify-content-center','align-items-center'); // اضافه کردن کلاس
        // editButton.addEventListener('click', (e) => {
        //     e.stopPropagation(); // جلوگیری از فعال شدن رویداد کلیک روی li
        //     editTask(index);
        // });
        // li.appendChild(editButton);

        // taskList.appendChild(li);
        const liItem =`<li class="d-flex p-2 mt-3 justify-content-between align-items-center w-100 mx-auto border border-user rounded-3">
        <div class="col-9">
          <span>${task}</span>
        </div>
        <div class="col-1">
          <button type="submit" id="deleteButton" class="btn bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/delete-svgrepo-com.svg" alt="del"></button>
        </div>
        <div class="col-1">
          <button type="submit" id="doneButton" class="btn bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/done-1476-svgrepo-com.svg" alt="edit"></button>
        </div>
        <div class="col-1">
          <button type="submit" id="editButton" class="btn bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/edit-svgrepo-com.svg" alt="edit"></button>
        </div>
      </li>`;
      taskList.insertAdjacentHTML('beforeend', liItem);
    
    });
}

// تابع برای اضافه کردن تسک جدید
function addTask() {
    const taskInput = document.getElementById('itemInput');
    const task = taskInput.value.trim();
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

// تابع برای حذف تسک
function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// رویداد برای دکمه اضافه کردن تسک
document.getElementById('addButton').addEventListener('click', addTask);

// بارگذاری تسک‌ها هنگام بارگذاری صفحه
loadTasks();