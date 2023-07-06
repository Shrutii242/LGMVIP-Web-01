window.addEventListener('load', ()=>{
    const form = document.querySelector('#todo');
    const input = document.querySelector('.text');
    const tasks = document.querySelector('.tasks');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if (!task){
            alert('Please fill out any task you want to do');
            return;
        }

        const taskinp = document.createElement('div');
        taskinp.classList.add('tasks');

        const taskinp_el = document.createElement('div');
        taskinp_el.classList.add('content');

        taskinp.appendChild(taskinp_el);

        const taskinp1 = document.createElement('input');
        taskinp1.classList.add('text');
        taskinp1.type = 'text';
        taskinp1.value = task;
        taskinp1.setAttribute('readonly', 'readonly');

        taskinp_el.appendChild(taskinp1)

        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        const button1 = document.createElement('button');
        button1.classList.add('edit');
        button1.innerText = 'Edit';

        const button2 = document.createElement('button');
        button2.classList.add('delete');
        button2.innerText = 'Delete';

        task_actions.appendChild(button1);
        task_actions.appendChild(button2);

        taskinp.appendChild(task_actions);
        tasks.appendChild(taskinp);

        input.value = '';

        button1.addEventListener('click', (e) =>{
            if (button1.innerText.toLowerCase() == 'edit'){
                button1.innerText = 'Save';
                taskinp1.removeAttribute('readonly');
                taskinp1.focus();
            }
            else{
                button1.innerText = 'Edit';
                taskinp1.setAttribute('readonly', 'readonly');
            }
        });

        button2.addEventListener('click', (e) =>{
            tasks.removeChild(taskinp);
        });

    });
})
