// Labirinto e player
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const mapSection = document.getElementById('map');

for (let i = 0; i < map.length; i++) {
    let line = document.createElement('div');
    line.id = `line${i}`;
    line.classList.add('line');
    for (let j = 0; j < map[i].length; j++) {
        let cell = document.createElement('div');
        cell.id = `cell${j}`;
        cell.classList.add('cell');
        line.appendChild(cell);
        if (map[i][j] === 'W') {
            cell.style.backgroundColor = "#8B4513	";
        } else if (map[i][j] === 'S') {
            let player = document.createElement('div');
            player.id = "player";
            player.classList.add('player');
            cell.appendChild(player)
        }
    }
    mapSection.appendChild(line);
}
// Labirinto e player
let x = 0;
let y = 9;
let movePlayer = player.parentElement.parentElement.parentElement.children;
const textWin = document.getElementById('textWin');

function vitoria() {
    textWin.innerText = "Você conseguiu atravessar o labirinto. Parabéns!!"
}

function reset() {
    movePlayer[9].children[0].appendChild(player)
    textWin.innerText = "";
}

function game(event) {
    const keyName = event.key;

    if (keyName === "ArrowRight") {
        if (map[y][x + 1] === " ") {
            x += 1;
            movePlayer[y].children[x].appendChild(player)
        } else if (map[y][x + 1] === "F") {
            x += 1;
            movePlayer[y].children[x].appendChild(player)
            setTimeout(() => vitoria(), 1000)
        }
    } else if (keyName === "ArrowLeft") {
        if (map[y][x - 1] === " " || map[y][x - 1] === "S") {
            x -= 1;
            movePlayer[y].children[x].appendChild(player)
        } else if (map[y][x + 1] === "F") {
            x -= 1;
            movePlayer[y].children[x].appendChild(player)
            setTimeout(() => vitoria(), 1000)
        }
    } else if (keyName === "ArrowUp") {
        if (map[y - 1][x] === " ") {
            y -= 1;
            movePlayer[y].children[x].appendChild(player)
        } else if (map[y][x + 1] === "F") {
            y -= 1;
            movePlayer[y].children[x].appendChild(player)
            setTimeout(() => vitoria(), 1000)
        }
    } else if (keyName === "ArrowDown") {
        if (map[y + 1][x] === " ") {
            y += 1;
            movePlayer[y].children[x].appendChild(player)
        } else if (map[y][x + 1] === "F") {
            y += 1;
            movePlayer[y].children[x].appendChild(player)
            setTimeout(() => vitoria(), 1000)
        }
    }
}

document.addEventListener('keydown', game);