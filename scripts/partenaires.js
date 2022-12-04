onloadHook.push(function () {

    createSlider(0, data.comments, (s, d) => {
        const section = createElement('section', ['slider_full_background', 'two_side_container'], null, d)
        createElement('img', null, null, createElement('div', null, null, section)).src = s.img
        const div = createElement('div', null, null, section)

        createElement('p', null, s.name, div)
        createElement('p', null, s.company, div)
        createElement('p', null, s.comment, div)

    }, 'temoignages', 10000)


})

createWheelStopListener(document, magnetize)
window.addEventListener('resize', magnetize)
