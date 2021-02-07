window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('.burger').classList.toggle('burger-activ')
        document.querySelector('#menu').classList.toggle('menu-active')
    })
})