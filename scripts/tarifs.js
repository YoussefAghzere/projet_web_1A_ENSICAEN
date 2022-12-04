onloadHook.push(function () {

    const list = document.getElementById('tarifs_list')

    for (const t of data.tarifs) {
        const card = createElement('div', ['two_side_container', 'card'], null, list)
        card.id = t.id

        createElement('img', 'full_image', null, card).src = t.img

        const right = createElement('div', null, null, card)
        createElement('h3', null, t.cat_name, right)
        const table = createElement('table', null, null, right)

        for (const p of t.prestations) {
            const tr = createElement('tr', null, null, table)

            createElement('td', null, p.name, tr)
            createElement('td', null, p.desc, tr)
            createElement('td', null, priceToString(p.price), tr)
        }
    }

    const link = window.location.href.split('#')
    if (link.length > 1) {
        window.scrollTo({behavior: 'smooth', top: document.getElementById(link.pop()).offsetTop})
    }

})
