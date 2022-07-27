'use strict'
////#region 宣告
const move = {
    x: 0, y: 0
}
const click = {
    x: 0, y: 0
}
const activeArea = document.querySelector('.active-area')
const canvas = document.querySelector('.drawCircle')

const btnStart = document.querySelector('.btn-start')
const divWidth = parseInt(activeArea.style.width.slice(0, -1)) / 100 * window.innerWidth
let ctx
const border = (window.innerWidth - divWidth) / 2
const startCountDown = document.querySelector('.countdown-display')
const scoreDisplay = document.querySelector('.score-display')
const gunFire = document.querySelector('.gun-fire')

//target
let targetPos
let target = document.querySelector('#target')
let left = parseInt(window.innerWidth / 2 - window.innerWidth * 0.1 - 25)
let bottom = parseInt(target.style.bottom.slice(0, -2))
let time = 20
let speedLeft
let speedBottom //set random
let score = 0
let hitboxRange = 40
const gameTime = 30
let direction
let timeCounter = 1
let perRun
let runtime
//#endregion

//window onload
window.onload = function () {
    canvas.width = divWidth
    canvas.height = 768
    btnStart.addEventListener('click', process)
}


//畫準心
function setCircle() {
    ctx = canvas.getContext("2d");
    //先清掉canvas目前繪製的圖形
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(move.x, move.y, hitboxRange, 0, Math.PI * 2);
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 1
    ctx.stroke()
    //畫橫線
    ctx.beginPath()
    ctx.strokeStyle = "#f00"
    ctx.moveTo(move.x + (-10), move.y)
    ctx.lineTo(move.x + ((10)), move.y)
    ctx.stroke()
    //畫直線
    ctx.beginPath()
    ctx.strokeStyle = "#f00"
    ctx.moveTo(move.x, move.y + (-10))
    ctx.lineTo(move.x, move.y + ((10)))
    ctx.stroke()
}
function followMouse(event) {
    move.x = event.pageX - border;
    move.y = event.pageY - 50;
    setCircle()
}

//==Function
function process() {
    //分數重置
    score = 0
    scoreDisplay.innerText = score
    //按開始後倒數3秒
    let countDown = 3
    startCountDown.style.opacity = 1
    startCountDown.innerText = countDown
    let countToZero = setInterval(function () {

        countDown--
        if (countDown == 0) {
            clearInterval(countToZero)
            startCountDown.style.opacity = 0
            countDown = 1
        }
        startCountDown.innerText = countDown
    }, 1000)
    btnStart.style.opacity = '0';
    btnStart.style.zIndex = '-5'
    //3秒後開始
    gameStart()

}
function gameStart() {
    //圓圈跟著滑鼠
    setCircle()
    activeArea.addEventListener('mousemove', hitCheck)
    activeArea.addEventListener('mousemove', followMouse)
    perRun = setInterval(targetRunOnce, 3000)
    runtime = setInterval(timer, 1000)
}
//#region func area

function setTarget() {
    //重置目標
    left = parseInt(window.innerWidth / 2 - window.innerWidth * 0.1 - 25)
    bottom = -120
    target.style.left = `${parseInt(window.innerWidth / 2 - window.innerWidth * 0.1 - 25)}px`
    target.style.bottom = '-80px'
}
function setSpeed() {
    //設定速度
    speedLeft = Math.floor(Math.random() * 7) + 3
    speedBottom = Math.floor(Math.random() * 12) + 5
    console.log(`L:${speedLeft} B:${speedBottom}`);

}
function setDirection() {
    direction = Math.floor(Math.random() * 2) > 0 ? 1 : -1
}
let gameMove
function startMove() {
    gameMove = setInterval(targetMove, time)
    function targetMove() {
        if (canvas.height - bottom <= Math.floor(canvas.height / 1.8)) {
            speedLeft += 0.5
            speedLeft = speedLeft > 6 ? 6 : speedLeft
            speedBottom -= 0.5
            speedBottom = speedBottom < 6 ? 6 : speedBottom
        }
        left += speedLeft * direction
        bottom += speedBottom
        target.style.left = `${left}px`
        target.style.bottom = `${bottom}px`
        if (rangeCheck()) {
            clearInterval(gameMove)
            if (target.getAttribute('last-run') == 'true') {
                resetUI()
            }
        }
        function rangeCheck() {
            if (bottom >= canvas.height || left <= -80 || left >= canvas.width) {
                return true
            }
            else return false
        }

    }
}
function timer() {
    timeCounter++
    console.log(timeCounter);
}
function targetRunOnce() {
    //重置目標
    setTarget()
    //設定速度
    setSpeed()
    //設定方向
    setDirection()
    //開始移動
    startMove()
    if (timeCounter >= gameTime) {
        clearInterval(perRun)
        clearInterval(runtime)
        target.setAttribute('last-run', 'true')
    }
}
function resetUI() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    btnStart.style.opacity = '1';
    btnStart.style.zIndex = '10'
    activeArea.removeEventListener('mousemove', followMouse)
    timeCounter = 1
    target.setAttribute('last-run', 'false')
}
function hitCheck() {
    activeArea.addEventListener('mousedown',function(e){
        //槍焰
        gunFire.style.top = `${e.pageY - 205}px`
        gunFire.style.left = `${e.pageX - 190}px`
        gunFire.style.opacity = 1
        gunFire.style.transition = 'unset'
        setTimeout(function () {
            gunFire.style.opacity = 0
            gunFire.style.transition = 'opacity .3s ease-out'
        }, 100)
        //晃動
        
        if (activeArea.classList.contains('shake')) {
            activeArea.classList.remove('shake')
        }
        activeArea.classList.add('shake')
        setTimeout(function () {
            activeArea.classList.remove('shake')
        }, 600)

        //擊中check
        click.x = e.pageX
        click.y = e.pageY
        targetPos = getPosition(target)
        let distanceX = Math.abs(click.x - targetPos.x)
        let distanceY = Math.abs(click.y - targetPos.y)
        if (distanceX < hitboxRange && distanceY < hitboxRange) {
            score += 1
            scoreDisplay.innerText = score
            scoreDisplay.classList.add('score-change')
            setTimeout(function () {
                scoreDisplay.classList.remove('score-change')
            }, 400)
            if (target.getAttribute('last-run') == 'true') {
                resetUI()
            }
            setTarget()
            clearInterval(gameMove)

        }
    })
    function getPosition(el) {
        let rect = el.getBoundingClientRect()
        let x = rect.x + rect.width / 2
        let y = rect.y + rect.width / 2
        return { x: x, y: y }
    }

}
//#endregion
