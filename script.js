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
            cell.style.backgroundColor = "#0000FF";
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

document.addEventListener('keydown', (evento) => {
    const keyName = evento.key;
    const movePlayer = document.getElementById('player');
    const parentElement1 = movePlayer.parentElement.parentElement.parentElement.children;

    for (let i = 0; i < parentElement1.length; i++) {
        for (let j = 0; j < parentElement1[i].children.length; j++) {
            if (parentElement1[i].children[j].childElementCount !== 0) {
                let nextCell = parentElement1[i].children[j + 1];
                let previousCell = parentElement1[i].children[j - 1];
                let lineAbove = parentElement1[i - 1].children[j];
                let lineBelow = parentElement1[i + 1].children[j];
                console.log(lineAbove);
                console.log(lineBelow)
                if (keyName === "ArrowRight" && nextCell.style.backgroundColor === "") {
                    nextCell.appendChild(player);
                    break;
                } else if (keyName === "ArrowLeft" && previousCell.style.backgroundColor === "") {
                    previousCell.appendChild(player);
                    break;
                } else if (keyName === "ArrowUp" && lineAbove.style.backgroundColor === "") {
                    lineAbove.appendChild(player);
                    break;
                } else if (keyName === "ArrowDown" && lineBelow.style.backgroundColor === "") {
                    lineBelow.appendChild(player);
                    break;
                }
            }
        }
    }
});