function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener('click', () => {
    console.log(randomColors());
    document.body.style.backgroundColor = `${randomColors()}`;
});

