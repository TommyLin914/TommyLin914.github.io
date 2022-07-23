'use strict'
////#region 宣告
const move = {
    x: 0, y: 0
}
const click = {
    x: 0, y: 0
}
const activeArea = document.querySelector('.active-area')
let canvas = document.querySelector('.drawCircle')
const btnStart = document.querySelector('.btn-start')
const divWidth = parseInt(activeArea.style.width.slice(0, -1)) / 100 * window.innerWidth
let ctx
const border = (window.innerWidth - divWidth) / 2
//target
let targetPos
let target = document.querySelector('#target')
let left = parseInt(window.innerWidth / 2 - window.innerWidth * 0.1 - 25)
let bottom = parseInt(target.style.bottom.slice(0, -2))
let time = 20
let speedLeft
let speedBottom //set random
let score = 0
let hitboxRange = 45
const gameTime = 30000
let countDown = gameTime / 1000
//#endregion


//#region window

window.onload = function () {
    getTargetPos()
    canvas.height = 768
    canvas.width = divWidth
}
//#endregion

//#region Dom
function drawCircle() {
    ctx = canvas.getContext("2d");
    //先清掉cvanvas目前繪製的圖形
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(move.x, move.y, hitboxRange, 0, Math.PI * 2);
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 1
    ctx.stroke()
    //畫橫線
    ctx.beginPath()
    ctx.strokeStyle = "#000"
    ctx.moveTo(move.x + (-10), move.y)
    ctx.lineTo(move.x + ((10)), move.y)
    ctx.stroke()
    //畫直線
    ctx.beginPath()
    ctx.strokeStyle = "#000"
    ctx.moveTo(move.x, move.y + (-10))
    ctx.lineTo(move.x, move.y + ((10)))
    ctx.stroke()

}
function createCanvas() {
    const canvasNew = document.createElement('canvas')
    canvasNew.classList.add('drawCircle')
    activeArea.append(canvasNew)
    canvas = document.querySelector('.drawCircle')
    canvas.width = divWidth
    canvas.height = 768
}
//#endregion

//#region func 
let img = document.createElement('img')
function nextRound() {
    if (img.getAttributeNode('end') != "true") {
        targetReset()
    }
}
function targetReset() {
    img = document.createElement('img')
    img.setAttribute('id', 'target')
    img.setAttribute('src', '/0714Homework/Frisbee.png')
    img.setAttribute('style', 'left: 48%; bottom:-80px;')
    img.setAttribute('end', 'false')
    activeArea.append(img)
    moveSet()
    target = document.querySelector('#target')
    left = parseInt(window.innerWidth / 2 - window.innerWidth * 0.1 - 25)
    bottom = -80
}
function mouseCircleEvent(event) {
    move.x = event.pageX - border;
    move.y = event.pageY -40;
    drawCircle()
}
function startMove() {
    moveSet()
    gameMove = setInterval(targetMove, time)
}

function directionSet() {
    let direction = Math.floor(Math.random() * 2) > 0 ? 1 : -1
    return direction
}
function targetMove() {
    left += speedLeft * direction
    bottom += speedBottom
    target.style.left = `${left}px`
    target.style.bottom = `${bottom}px`
    if (rangeCheck()) {
        activeArea.removeChild(target)
        setTimeout(nextRound, 1000)

        // bottom = 0
    }
    let currPos = getPos(target)

}
let gameAim
let gameMove
let direction
function moveSet() {
    speedSet()
    direction = directionSet()
}

function speedSet() {
    speedLeft = Math.floor(Math.random() * 7) + 1
    console.log('左右速度' + speedLeft);
    speedBottom = Math.floor(Math.random() * 10) + 6
    console.log('垂直速度' + speedBottom);
}


function getTargetPos() {
    targetPos = getPos(target)
}
activeArea.onclick = ((e) => {
    click.x = e.pageX
    click.y = e.pageY
    targetCheck()
    debugger
})
function targetCheck() {
    getTargetPos()
    let distanceX = Math.abs(click.x - targetPos.x)
    let distanceY = Math.abs(click.y - targetPos.y)

    if (distanceX < hitboxRange && distanceY < hitboxRange) {
        score += 1
        activeArea.removeChild(target)
        if (countDown > 0) {
            setTimeout(targetReset, 500)
        }
    }

}

function getPos(el) {
    let rect = el.getBoundingClientRect();
    let y = rect.y + rect.height / 2;
    let x = rect.x + rect.width / 2;
    return { x: x, y: y };
}
btnStart.addEventListener('click', function () {
    btnStart.style.opacity = '0';
    btnStart.style.zIndex = '-5'
    setTimeout(gameStart, 3000)
})
let countDownTimer
let rangeChecker
function gameStart() {

    createCanvas()
    targetReset()
    activeArea.addEventListener('mousemove', mouseCircleEvent)
    startMove()
    gameAim = setInterval(drawCircle, 1)
    // btnStart.disabled = true 
    countDown = gameTime / 1000
    countDownTimer = setInterval(count, 1000)
    rangeChecker = setInterval(rangeCheck,1000)
    // setTimeout(btnStart.disabled = false, gameTime)
    setTimeout(gameEnd, gameTime)
}
function count() {
    countDown -= 1
    console.log(countDown);
    if (countDown == 0) {
        clearInterval(countDownTimer)
    }
}
let final
function gameEnd() {
    clearInterval(gameMove)
    final = setInterval(finalRun, time)
    target.setAttribute('end', 'true')
    // btnStart.disabled = false

}
function finalRun() {
    left += speedLeft * direction
    bottom += speedBottom
    if (rangeCheck()) {
        clearInterval(final)
        clearInterval(gameAim)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        activeArea.innerHTML = ''
        btnStart.style.opacity = '1';
        btnStart.style.zIndex = '100'
    }
    target.style.left = `${left}px`
    target.style.bottom = `${bottom}px`
}
function rangeCheck() {
    if (bottom >= canvas.height || left <= 0 || left >= canvas.width) {
        return true
    }
    else return false
}
  //#endregion