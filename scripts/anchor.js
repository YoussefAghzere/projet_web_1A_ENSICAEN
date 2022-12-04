onloadHook.push(function () {

    const grid = document.getElementById('anchor_imgs')

    for (const p of data.reals[Number(window.location.href.split('#').pop())].imgs) {
        const card = createElement('div', ['card'], null, grid)
        const img = createElement('img', 'full_image', null, createElement('div', null, null, card))
        img.src = p
    }

})

function goBack() {
    window.location.href = 'realisations.html'
}
