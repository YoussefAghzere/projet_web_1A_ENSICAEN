// Import HMLT
let toLoad = 1
$(window).ready(function () {
    $('.import').each(function (index, e) {
        toLoad++
        $(this).load(e.innerText, function () {
            toLoad--
            checkLoadEnd()
        })
    })
})

function checkLoadEnd() {
    if (toLoad === 0) {
        selectCurrentPageLink()
        importsData()
        setSubmenu()

        for (const f of onloadHook) {
            f()
        }
    }
}

const onloadHook = []
window.onload = function () {
    toLoad--
    checkLoadEnd()
}

function createElement(type, className = null, content = null, parent = null) {
    const e = document.createElement(type)
    if (className) {
        if (typeof(className) === 'object') e.classList.add(...className)
        else e.classList.add(className)
    }
    if (content) e.innerHTML = content
    if (parent) parent.appendChild(e)
    return e
}

let slide_number = {}

function createSlider(sliderID, slides_content, create_slide, title = null, delay = null) {
    const slider = document.getElementsByClassName('slider')[sliderID]
    if (title) createElement('h2', 'slider_title', title, slider)
    const floats = createElement('div', 'slider_floats', null, slider)

    createElement('button', 'dot', '<', floats).onclick = () => {
        changeSlide(sliderID, -1)
    }
    createElement('button', 'dot', '>', floats).onclick = () => {
        changeSlide(sliderID, 1)
    }

    const dots = createElement('div', 'dots', null, null)
    floats.insertBefore(dots, floats.children[1])

    slide_number[sliderID] = {n: 0, count: slides_content.length, delay: delay}

    for (let s of slides_content) {
        const d = createElement('div', 'slide', null, slider)
        create_slide(s, d)

        createElement('div', 'dot', null, dots)
    }

    changeSlide(sliderID, 0)
    if (delay) {
        slide_number[sliderID].auto = setTimeout(changeSlide, delay, sliderID, 1)
    }
}

function changeSlide(sliderID, sens) {
    const slider = document.getElementsByClassName('slider')[sliderID]
    const dots = slider.getElementsByClassName('dots')[0]

    let n = slide_number[sliderID].n
    const count = slide_number[sliderID].count

    slider.getElementsByClassName('slide')[n].style.display = 'none'
    dots.children[n].classList.remove('active')

    n += sens
    while (n < 0) n += count
    while (n >= count) n -= count

    slide_number[sliderID].n = n

    slider.getElementsByClassName('slide')[n].style.display = 'flex'
    dots.children[n].classList.add('active')

    if (slide_number[sliderID].auto) clearTimeout(slide_number[sliderID].auto)
    if (slide_number[sliderID].delay) {
        slide_number[sliderID].auto = setTimeout(changeSlide, slide_number[sliderID].delay, sliderID, 1)
    }
}

function selectCurrentPageLink() {
    const links = document.getElementById('nav_list').children

    if (window.location.href.split(new RegExp('[#?]'))[0].split('/').pop() === '') {
        links[0].classList.add('active-page')
        return;
    }
    for (const l of links) {
        if (l.children[0].href.split("#")[0].split('/').pop() === window.location.href.split(new RegExp('[#?]'))[0].split('/').pop()) {
            l.classList.add('active-page')
            return
        }
    }
}

function importData(class_name, data) {
    const objs = document.getElementsByClassName(class_name)
    for (const o of objs) {
        o.innerText = data
    }
}

function importsData() {
    importData('import_addr', data.company.address)
    importData('import_tel', data.company.tel)
    importData('import_email', data.company.email)
    importData('import_year', new Date().getFullYear())
}

function setSubmenu() {
    const menu = document.getElementById('tarifs_sub')

    for (const t of data.tarifs) {
        const li = createElement('li', null, null, menu)
        li.link = 'tarifs.html#'+t.id
        li.onclick = function () {
            goTo(this.link)
        }
        createElement('a', null, t.cat_name, createElement('div', null, null, li)).href = 'tarifs.html#'+t.id
    }
}
Number.prototype.padLeft = function (base, chr) {
    var len = (String(base || 10).length - String(this).length) + 1
    return len > 0 ? new Array(len).join(chr || '0') + this : this
}

function priceToString(price) {
    const p = String(price.padLeft(100))
    return p.substring(0, p.length-2) + '€' + p.substring(p.length-2)
}

function magnetize() {
    const magnets = document.getElementsByClassName('magnet_scroll')

    let d = 400
    let c = null
    for (const m of magnets) {
        let delta = Math.abs(m.getBoundingClientRect().y)
        if (delta < d) {
            c = m
            d = delta
        }
    }

    if (c) {
        window.scrollBy({behavior: 'smooth', top: c.getBoundingClientRect().y})
    }
}

function goTo(l) {
    window.location.href = l
}
