const game = () => {
    var click = document.querySelector(".player")
    click.classList.add('up')
    setTimeout(() => {
        click.classList.remove('up')
    }, 1000)
}
setInterval(() => {
    var player = document.querySelector('.player');
    var bhada = document.querySelector('.obsetacle');
    var gameover = document.querySelector('#gameover');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('right'))
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'))

    ox = parseInt(window.getComputedStyle(bhada, null).getPropertyValue('right'))
    oy = parseInt(window.getComputedStyle(bhada, null).getPropertyValue('bottom'))

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);

    if (offsetX < 55 && offsetY < 50) {
        gameover.innerHTML = "Game Over - Reload to Play Again"
        bhada.classList.remove("obsetacle")
    } else {
        gameover.innerHTML = 'Made By OmForWeb'
    }
}, 100);