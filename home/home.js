let mainData = []
let tBody = document.getElementById('main-table-body')
let addInput = document.getElementById('add-title')
let editInput = document.getElementById('edit-title')
let editModal = document.getElementById('editModal')
let editId = ''


fetch('https://jsonplaceholder.typicode.com/todos').then(async res => {
    let data = await res.json()
    startData(data.slice(0, 10))
    mainData = data.slice(0, 10)
})

function handleAdd(event) {
    event.preventDefault()
    let newId = mainData[mainData.length - 1].id + 1
    let newTodo = {
        id: newId,
        title: addInput.value,
        completed: false
    }
    mainData.push(newTodo)
    startData(mainData)
}

function handleSwitch(event, id) {
    let newData = mainData.map(ele => {
        return ele.id === id ? { ...ele, completed: event.target.checked } : ele
    })
    mainData = [...newData]
    startData(newData)
}

function handleEdit(event) {
    event.preventDefault()
    let newData = mainData.map(ele => {
        return ele.id === editId ? { ...ele, title: editInput.value } : ele
    })
    mainData = [...newData]
    startData(newData)
}

editModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var editable = button.getAttribute('data-bs-whatever').split('-')
    editId = Number(editable[1])
    editInput.value = editable[0]
})

function handleDelete(id) {
    let newData = mainData.filter(ele => {
        return ele.id !== id
    })
    mainData = [...newData]
    startData(newData)
}

function startData(data) {
    tBody.innerHTML = ''
    data.map(ele => {
        tBody.innerHTML += `<tr>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td><div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ${ele.completed ? 'checked' : ''} onclick='handleSwitch(event,${ele.id})'>
                <label class="form-check-label" for="flexSwitchCheckDefault">${ele.completed ? 'completed' : 'not completed'}</label>
            </div></td>
            <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever='${ele.title}-${ele.id}'>Edit</button>
                <button type="button" class="btn btn-danger" onclick='handleDelete(${ele.id})'>Delete</button>
            </td>
        </tr>`
    })
}


