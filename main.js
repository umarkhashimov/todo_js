function getTask(){
    const text = document.getElementById('taskText').value
    const date = document.getElementById('taskDate').value

    const div = document.createElement('div')
    div.classList.add("col-12", "border", "border-3", "mt-3", "rounded-3", "py-3")

    const h5 = document.createElement('h5')
    h5.innerText = text

    const p = document.createElement('p')
    p.innerText = date

    div.append(p, h5)
    
    const row = document.querySelector('.taskList')
    row.append(div)
}

document.getElementById('createBtn').addEventListener('click', getTask)