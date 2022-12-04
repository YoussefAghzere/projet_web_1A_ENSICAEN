onloadHook.push(function () {

    createSlider(0, data.slides_image, (s, d) => {
        createElement('img', 'slider_full_background', null, d).src = s.img
        createElement('h2', null, s.text, createElement('section', 'slider_full_background_filter', null, d))
    }, null, 10000)

    createSlider(1, data.slides_actuality, (s, d) => {
        const section = createElement('section', 'slider_full_background', null, d)
        createElement('h3', null, s.title, section)
        createElement('p', null, s.text, section)
    }, 'Actu', 10000)

})

createWheelStopListener(document, magnetize)
window.addEventListener('resize', magnetize)
