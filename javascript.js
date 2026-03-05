const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    console.log(e)
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.toggle('selected');
    }
});

