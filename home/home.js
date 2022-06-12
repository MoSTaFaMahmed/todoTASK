let mainData = []
let tBody = document.getElementById('main-table-body')


fetch('https://jsonplaceholder.typicode.com/todos').then(async res => {
    let data = await res.json()
    startData(data.slice(0, 10))
    mainData = data.slice(0, 10)
})


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
            
        </tr>`
    })
}
function logout (){
     window.location.href = "../login/login.html"
 }
 

