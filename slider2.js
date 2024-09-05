window.addEventListener('scroll', function() {
    var slideUpElements = document.querySelectorAll('.slide-up');
    var windowHeight = window.innerHeight;

    slideUpElements.forEach(function(element) {
        var rect = element.getBoundingClientRect();

        if (rect.top <= windowHeight) {
            element.classList.add('show');
        }
    });
});
