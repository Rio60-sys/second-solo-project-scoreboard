let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")
let homeCount = 0
let scoreGuest = 0

function add1PointHome() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function add2PointsHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function add3PointsHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function add1PointGuest() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function add2PointsGuest() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function add3PointsGuest() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}

function reset() {
    scoreGuest = 0
    homeCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}