let valor_int = 0;
let board;
let turno = 0;

function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        for (let j = 0; j < numCols; j++) {
            casillas.push({
                valor : ""
            })
        }
        rows.push(casillas)
    }
    return rows
}

const getValue = (board, row, col) => {
    return board[row][col]
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`)
            butCasilla.innerText = casillas[j].valor
        }
    }
}

const casillaOnClick = (row, col) => {
    const casilla = getValue(board, row, col);
    if(valor_int%2==0){
        casilla.valor = "X"
        renderizarBoard(board)
        valor_int = valor_int + 1
    } else {
        casilla.valor = "O"
        renderizarBoard(board)
        valor_int = valor_int + 1
    }

    analizarTabla(casilla.valor)
}

const analizarTabla = (letra) => {
    const titulo = document.getElementById("titulo")
    const boton1 = document.getElementById("0_0").valor
    const boton2 = document.getElementById("0_1").valor
    const boton3 = document.getElementById("0_2").valor
    const boton4 = document.getElementById("1_0").valor
    const boton5 = document.getElementById("1_1").valor
    const boton6 = document.getElementById("1_2").valor
    const boton7 = document.getElementById("2_0").valor
    const boton8 = document.getElementById("2_1").valor
    const boton9 = document.getElementById("2_2").valor

    if ((boton1 == 'X') && (boton2 == 'X') && (boton3 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton4 == 'X') && (boton5 == 'X') && (boton6 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton7 == 'X') && (boton8 == 'X') && (boton9 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton1 == 'X') && (boton5 == 'X') && (boton9 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton3 == 'X') && (boton5 == 'X') && (boton7 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton1 == 'X') && (boton4 == 'X') && (boton7 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton2 == 'X') && (boton5 == 'X') && (boton8 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton3 == 'X') && (boton6 == 'X') && (boton9 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }

    else if ((boton1 == 'X') && (boton2 == 'X') && (boton3 == 'X')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton4 == 'O') && (boton5 == 'O') && (boton6 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton7 == 'O') && (boton8 == 'O') && (boton9 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton1 == 'O') && (boton5 == 'O') && (boton9 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton3 == 'O') && (boton5 == 'O') && (boton7 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton1 == 'O') && (boton4 == 'X') && (boton7 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton2 == 'O') && (boton5 == 'O') && (boton8 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    else if ((boton3 == 'O') && (boton6 == 'O') && (boton9 == 'O')) {
        desabilitarBotones(board)
        titulo.innerText = `Jugador ${letra} ganó`
    }
    
    turno = turno + 1
    if(turno == 9){
        desabilitarBotones(board)
        titulo.innerText = "Empate"
    }
}

const desabilitarBotones = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            document.getElementById(`${i}_${j}`).classList.add("disabled");

        }
    }
}

const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)
}

main()