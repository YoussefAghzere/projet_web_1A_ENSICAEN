function createWheelStopListener(element, callback, timeout) {
    let handle = null
    const onScroll = function () {
        if (handle) {
            clearTimeout(handle)
        }
        handle = setTimeout(callback, timeout || 200) // default 200 ms
    }
    element.addEventListener('wheel', onScroll)
    return function() {
        element.removeEventListener('wheel', onScroll)
    }
}
