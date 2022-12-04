onloadHook.push(function () {

    const grid = document.getElementsByClassName('card_grid')[0]

    for (const p of data.employees) {
        const card = createElement('div', ['card', 'two_side_container'], null, grid)
        const img = createElement('img', 'full_image', null, createElement('div', null, null, card))
        img.src = p.img
        img.alt = 'Profile image'

        const right = createElement('div', null, null, card)
        createElement('h3', null, p.name, right)
        createElement('h4', null, p.pseudo, right)
        createElement('p', null, p.desc, right)

        const a = createElement('a', 'card_logo', null, right)
        a.href = p.linkedin
        a.target='_blank'
        createElement('img', null, null, a).src = 'images/logos/logo-linkedin.png'
    }

})
