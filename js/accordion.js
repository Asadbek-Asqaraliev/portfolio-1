window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.d').forEach(function(el){
            el.addEventListener('click' , function(event){
                event.target.classList.toggle('d-active')
            })
        })
})