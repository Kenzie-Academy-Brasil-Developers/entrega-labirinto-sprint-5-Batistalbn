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

const mapSection = document.getElementById('map')

for (let i = 0; i < map.length; i++) {
    let linha = document.createElement('div')
    linha.id = `linha${i}`
    linha.classList.add('linha')
    console.log(linha)
    for (let j = 0; j < map[i].length; j++) {
        let celula = document.createElement('div');
        celula.id = `celula${j}`
        celula.classList.add('celula')
        linha.appendChild(celula)
        if (map[i][j] === 'W') {
            celula.style.backgroundColor = "#0000FF"
        }
    }
    mapSection.appendChild(linha)

}