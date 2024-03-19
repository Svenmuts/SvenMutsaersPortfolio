window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        var elements = document.querySelectorAll('.fade-in');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 1;
        }
    }, 50); // Vertraging van 500 milliseconden
});