let scheduleObj = {
    date: '2022-07-17',
    todoDetail: [
        {
            title: '掃地',
            time: '15:00',
            detail: '詳細內容',
            location: '家裡',
            color: '#fa0'
        }
    ]
}
const month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//#region 宣告
let btnThisMonth = document.querySelector('.list-date')
const btnEdit = document.querySelector('.btn-edit')
let today = new Date()
let currentDate = today.getDate()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let daysCount = new Date(currentYear, currentMonth + 1, 0).getDate()

let firstDay = getFirstDay()

//#endregion

//#region window onload
window.onload = function () {
    createCalendar()
    changeMonth(0)
}
//#endregion

//#region Dom
const btnSave = document.querySelector('.btn-save')
const btnDelete = document.querySelector('.btn-delete')
const btnMonth = document.querySelector('.btn-display')
const btnLastMonth = document.querySelector('.btn-left')
const btnNextMonth = document.querySelector('.btn-right')
const listDates = document.querySelector('.list-date')
const yearDisplay = document.querySelector('.select-year')
const btnGoBack = document.querySelector('.go-back')
const btnLaunch = document.querySelector('.btn-launch')
const btnSet = document.querySelector('.btn-set')
const modalAdd = document.querySelector('#add-event-modal')
const modalAddClose = document.querySelector('.btn-close-add')
const modalEditClose = document.querySelector('.btn-close-edit')
var addModal = new bootstrap.Modal(document.getElementById('add-event-modal'))
var showModal = new bootstrap.Modal(document.getElementById('display-event-modal'))
let inputAll = document.querySelectorAll('input')

const inputTitle = document.querySelector('#set-title')
const inputTime = document.querySelector('#set-time')
const inputDate = document.querySelector('#set-date')
const inputDetail = document.querySelector('#set-detail')
const inputLoc = document.querySelector('#set-location')
const inputColor = document.querySelector('#set-color')
function createCalendar() {
    btnThisMonth.innerHTML = ''
    //空白日期
    for (let i = firstDay; i > 0; i--) {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.classList.add('current-date')
        li.classList.add('date', 'list-group-item', 'another-month')
        let countMonth
        let countYear
        countMonth = currentMonth + 1
        countYear = currentYear
        let days = new Date(countYear, countMonth, 0).getDate()
        div.innerText = days - i
        li.append(div)
        listDates.append(li)
    }
    //本月
    for (let i = 1; i <= daysCount; i++) {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.classList.add('current-date')
        li.classList.add('date', 'list-group-item')
        if (i == currentDate && currentMonth == today.getMonth() && currentYear == today.getFullYear()) {
            li.classList.add('today')
        }
        li.setAttribute('data-id', `${currentYear}-${currentMonth + 1}-${i}`)
        div.innerText = i
        li.append(div)
        if (localStorage.getItem(li.dataset.id) != null) {
            let todoList = JSON.parse(localStorage.getItem(li.dataset.id))

            let ulTodo = document.createElement('ul')
            todoList.forEach(function (item, index) {
                let liTodo = document.createElement('li')
                liTodo.classList.add('li-todo', 'px-3', 'py-1')
                liTodo.setAttribute('data-id', `${currentYear}-${currentMonth + 1}-${i}`)
                liTodo.dataset.index = index

                let divTodo = document.createElement('div')
                divTodo.classList.add('divColor')
                divTodo.style.border = `2px solid ${item.color}`
                let pTodo = document.createElement('p')
                pTodo.classList.add('p-todo')
                pTodo.setAttribute('data-id', `${currentYear}-${currentMonth + 1}-${i}`)
                pTodo.innerText = item.title
                pTodo.dataset.index = index
                divTodo.append(pTodo)
                liTodo.append(divTodo)
                liTodo.onclick = function (event) {
                    currentIndex = index
                    displaySchedule(event)
                }

                ulTodo.classList.add('ul-todo')
                ulTodo.append(liTodo)
                ulTodo.dataset.id = `${currentYear}-${currentMonth + 1}-${i}`
                li.append(ulTodo)
            })
        }

        listDates.append(li)
    }
    let lastDate = new Date(currentYear, currentMonth + 1, 0)

    let lastDay = lastDate.getDay()
    //補滿
    for (i = 1; i < 7 - lastDay; i++) {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.classList.add('current-date')
        li.classList.add('date', 'list-group-item', 'another-month')
        div.innerText = i
        li.append(div)
        listDates.append(li)
    }
    btnThisMonth = document.querySelector('.list-date')
}

//#endregion

//#region func
function getFirstDay() {
    return new Date(currentYear, currentMonth, 1).getDay()
}
function getDaysCount() {
    new Date(currentYear, currentMonth + 2, 0).getDate()
}

function setCalendar(add) {
    changeMonth(add)
    listDates.innerHTML = ''
    createCalendar()
}
btnLastMonth.onclick = function () {
    setCalendar(-1)
}
btnNextMonth.onclick = function () {
    setCalendar(1)
}
function changeMonth(add) {
    console.log(currentMonth + ':' + daysCount)
    currentMonth += add

    firstDay = getFirstDay()
    daysCount = new Date(currentYear, currentMonth + 1, 0).getDate()
    if (currentMonth == 12) {
        currentMonth = 0
        currentYear += 1
    }
    if (currentMonth == -1) {
        currentMonth = 11
        currentYear -= 1
    }
    btnMonth.innerText = month_name[currentMonth]
    yearDisplay.innerText = currentYear
}
btnGoBack.onclick = function () {
    currentMonth = today.getMonth()
    currentYear = today.getFullYear()
    setCalendar(0)
}

//#region 新增項目

let dataId
const allowDate = document.querySelectorAll('.allow-date')
btnThisMonth.addEventListener('click', function (event) {
    dataId = event.target.dataset.id
    clickCheck()
})
allowDate.forEach(date => {
    date.onclick = event => {
        dataId = event.target.dataset.id
        clickCheck()
    }
})
function addZero(dataId) {
    let dataArr = dataId.split('-')
    let dataMonth = parseInt(dataArr[1]) < 10 ? `0${dataArr[1]}` : dataArr[1]
    let dataYear = parseInt(dataArr[2]) < 10 ? `0${dataArr[2]}` : dataArr[2]
    return `${dataArr[0]}-${dataMonth}-${dataYear}`
}
//點日曆新增或檢視
function clickCheck() {
    if (dataId == null) {
        return
    }
    if (dataId.split('-')[1] != currentMonth - 1) {
        btnSet.click()
        inputDate.value = addZero(dataId)
    }
}
//新增項目

btnSave.addEventListener('click', setScheduleValues)
let setTitle
let setTime
let setDetail
let setLocation
let setColor
let currentIndex = -1
let currObj
function setScheduleValues() {
    let key = dataId

    let tempObj = {
        title: inputTitle.value,
        time: inputTime.value,
        detail: inputDetail.value,
        location: inputLoc.value,
        color: inputColor.value
    }
    let scheduleList = []
    if (currentIndex == -1) {
        if (localStorage.getItem(key) == null) {
            scheduleList.push(tempObj)
        } else {
            scheduleList = JSON.parse(localStorage.getItem(key))
            scheduleList.push(tempObj)
        }
    } else {
        scheduleList = JSON.parse(localStorage.getItem(key))
        scheduleList[currentIndex] = tempObj
    }

    localStorage.setItem(key, JSON.stringify(scheduleList))
    createCalendar()
    modalAddClose.click()
    currentIndex = -1

    inputTitle.value = ''
    inputDetail.value = ''
    inputLoc.value = ''
    inputColor.value = '#000000'
}
function setScheduleInDate() {
    let li = document.createElement('li')
    let div = document.createElement('div')
    let p = document.createElement('p')
    if (localStorage.getItem(dataId) != null) {
        div.classList.add('divColor')
        div.style.backgroundColor = bgColor
    }
    p.innerText = titleP
    div.append(p)
    li.appendChild(div)
}

function displaySchedule(event) {
    dataId = event.target.dataset.id
    const titleSchedule = document.querySelector('.schedule-title')
    const dateSchedule = document.querySelector('.schedule-date')
    const timeSchedule = document.querySelector('.schedule-time')
    const detailSchedule = document.querySelector('.schedule-detail')
    const locSchedule = document.querySelector('.schedule-location')
    let liDataId = event.target.dataset.id
    let index = event.target.dataset.index
    let val = JSON.parse(localStorage.getItem(liDataId))

    currObj = {
        title: val[index].title,
        time: val[index].time,
        detail: val[index].detail,
        location: val[index].location,
        color: val[index].color
    }
    currentIndex = index
    titleSchedule.innerText = currObj.title
    dateSchedule.innerText = liDataId
    timeSchedule.innerText = currObj.time
    detailSchedule.innerText = currObj.detail
    locSchedule.innerText = currObj.location
    btnLaunch.click()
    event.stopPropagation()
}
btnEdit.onclick = () => {
    showModal.toggle()
    inputTitle.value = currObj.title
    inputTime.value = currObj.time
    inputDetail.value = currObj.detail
    inputLoc.value = currObj.location
    inputColor.value = currObj.color

    addModal.toggle()
}
btnDelete.onclick = () => {
    if (confirm('確認刪除行程?')) {
        scheduleList = JSON.parse(localStorage.getItem(dataId))
        scheduleList.splice(currentIndex, 1)
        localStorage.setItem(dataId, JSON.stringify(scheduleList))
        showModal.toggle()
        createCalendar()
    }
}
