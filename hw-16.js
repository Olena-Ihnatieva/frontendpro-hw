function creatDiv() {
    const div = document.createElement('div');
    div.classList.add('div');
    document.body.appendChild(div);
}

function removeDiv() {
    const div = document.querySelector('div');
    div.remove();
}

document.querySelector('#myInput').addEventListener('focus', creatDiv);

document.querySelector('#myInput').addEventListener('blur', removeDiv);