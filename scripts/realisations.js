onloadHook.push(function () {

    const grid = document.getElementById('real_grid')

    for (const pi in data.reals) {
        const p = data.reals[pi]
        const card = createElement('div', ['card'], null, grid)
        const img = createElement('img', 'full_image', null, createElement('div', null, null, card))
        img.src = p.imgs[0]

        createElement('p', null, p.text, createElement('div', null, null, card))

        card.onclick = onclick
        card.index = pi
    }

})

function onclick() {
    window.location.href = 'anchor.html#'+this.index
}
