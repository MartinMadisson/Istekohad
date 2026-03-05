const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.toggle('selected');
    }
});

function sendBron() {
return document.querySelector('button.selected').innerText                          // saada
}
console.log(sendBron)