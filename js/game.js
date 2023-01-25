'use strict'

const MINE = '🧨'

var gBoard
var gLevel = {
    SIZE: 4,
    MINES: 2
}
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

// start the game
function onInit() {

    gBoard = buildBoard()
    renderBoard(gBoard)
}


//build the board
function buildBoard() {
    var Board = []

    for (var i = 0; i < gLevel.SIZE; i++) {
        Board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            Board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: true
            }
        }
    }
    // console.table(Board)
    return Board
}

function renderBoard(Board) {
    var strHTML = ''
    for (var i = 0; i < Board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < Board[0].length; j++) {
            var currCell = Board[i][j]
            var strClass = {i: i, j: j}
            strHTML += `<td>${currCell}</td>`
        }
        strHTML += `</tr>\n`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    console.log(strHTML)
}
