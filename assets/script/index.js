//вариант 1. очень костылевый, но пусть будет
const addTaskBtn = document.querySelector('#btn_add');
const clearTaskBtn = document.querySelector('#btn_clear');
let inputTask = document.querySelector('#text_task');
let allTask = document.querySelector('.task');
let newTaskDiv = document.querySelector('#tasks');
let noTasks = document.querySelector('.no_tasks');
let arrTasks = [];

const pushTask = () => {
    let tasksText = inputTask.value;
    if(!tasksText) return arrTasks;
    arrTasks.push(tasksText);
    console.log(arrTasks);
    return arrTasks;
};

function addTask(callback) {
    let text = callback();
    if (arrTasks.length > 0) {
        noTasks.style.display = 'none';
        clearTaskBtn.removeAttribute('disabled');
    }
    for (let i = 0; i < text.length; i++ ) {
        let task = document.createElement('div');
        task.classList.add('checkbox');
        task.innerHTML = `<p>${text[i]}</p>
        <input type="checkbox" class="check" id="check${i+1}" />
        <label for="check${i+1}" class="label">

            <svg width="50" height="50" viewbox="0 0 100 100">
                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
                <g transform="translate(0,-952.36222)">
                    <path
                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                        stroke="green" stroke-width="3" fill="none" class="path1" />
                </g>
            </svg>
        </label>`;
        newTaskDiv.append(task);
    }
    inputTask.value = '';
}
function wrapper() {
    newTaskDiv.innerHTML = '';
    addTask(pushTask);
}

addTaskBtn.addEventListener('click', wrapper);
clearTaskBtn.addEventListener('click', () => {
    newTaskDiv.innerHTML = '';
    arrTasks.length = 0;
    noTasks.style.display = 'block';
    clearTaskBtn.setAttribute('disabled', true);
});

//Вариант 2.




// const body = document.querySelector('body');
// const exDiv = document.createElement('div');


// function showN(n) {
//     let args = Array.from(String(n), Number);
//     console.log(args);
//     const cloneArgs  = args.slice();
//     let newArg = String(n).split('_');
//     const reverse = cloneArgs.reverse();
//     let newReverse = reverse.join('');
//     const sumArgs = args.reduce((a,b)=>+a + +b);
//     const arrLength = args.length;

//     exDiv.innerHTML = `<p>Число: ${args};</p><p>Или число без запятых: ${newArg};</p><p>Цифр в числе: ${arrLength};</p><p>Сумма: ${sumArgs};</p><p>Обратный порядок: ${reverse}</p><p>Или обратный порядок без запятых: ${newReverse}</p>`;
//     body.append(exDiv);
// }

// showN(586775764);