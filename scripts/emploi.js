onloadHook.push(function () {

    const table = document.getElementById('list_emploi')

    for (const e of data.emplois) {
        const card = createElement('div', [], null, table)

        createElement('p', null, e.name, card)
        createElement('p', null, e.type, card)
        createElement('p', null, e.desc, card)
        createElement('p', null, priceToString(e.salary), card)
    }

    const link = window.location.href.split('#')
    if (link.length > 1) {
        window.scrollTo({behavior: 'smooth', top: document.getElementById(link.pop()).offsetTop})
    }

})
