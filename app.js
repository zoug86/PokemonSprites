//https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png

const url = "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/"
const container = document.querySelector('.container');


for (let i = 1; i < 152; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    const img = document.createElement('img');
    img.src = url + `${i}.png`;
    const p = document.createElement('span');
    p.innerText = `#${i}`;
    p.style.fontSize = "15px";
    div.appendChild(img);
    div.classList.add('square');
    div.appendChild(p);
}


