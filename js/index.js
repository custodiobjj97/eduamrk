function initMenuMobile() {
    const $menu = document.querySelector('.menu-list')
    const $toggle = document.querySelector('.toggle')
    const $icon = document.querySelector('.fa-bars')
    $toggle.addEventListener('click', () => {
        if ($icon.classList.contains('fa-bars')) {
            $icon.classList.replace('fa-bars','fa-times')
        } else {
            $icon.classList.replace('fa-times', 'fa-bars')
        }
        $menu.classList.toggle('open')
    })
}

initMenuMobile()


function initSliderTouch() {
    const wrapper = document.querySelector('.wrapper')
    
    let pressed = 0
    let startX = 0
    
    wrapper.addEventListener('mousedown', function (e) {
        pressed = true 
        startX = e.clientX
        this.style.cursor="drabbing"
    })

    wrapper.addEventListener('mouseleave', function (e) {
        pressed = false
    })
    window.addEventListener('mouseup', function (e) {
        pressed = false
        wrapper.style.cursor = 'drab'
    })

    wrapper.addEventListener('mousemove', function (e) {
        if (!pressed) {
            return 
        }

        this.scrollLeft+= startX - e.clientX
    })
}

initSliderTouch()