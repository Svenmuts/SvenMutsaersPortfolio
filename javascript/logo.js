var isExpanded = false;
var logoBlock = document.querySelector('.logo-block');

// Save the original styles
var originalStyles = {
    height: logoBlock.style.height,
    width: logoBlock.style.width,
    position: logoBlock.style.position,
    left: logoBlock.style.left,
    top: logoBlock.style.top,
    innerHTML: logoBlock.innerHTML,
    backgroundColor: logoBlock.style.backgroundColor
};

logoBlock.style.transition = "all 0.5s"; // Add transition

logoBlock.addEventListener('click', function() {
    if (!isExpanded) {
        this.style.height = '100vh';
        this.style.width = '100vw';
        this.style.position = 'absolute';
        this.style.left = '0';
        this.style.top = '0';
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        isExpanded = true;
    } else {
        // Restore the original styles
        this.style.height = originalStyles.height;
        this.style.width = originalStyles.width;
        this.style.position = originalStyles.position;
        this.style.left = originalStyles.left;
        this.style.top = originalStyles.top;
        this.innerHTML = originalStyles.innerHTML = '<h1>S</h1>'; // Add 'S' to the original innerHTML
        this.style.backgroundColor = originalStyles.backgroundColor;
        isExpanded = false;
    }
});

/* JavaScript */
/* JavaScript */
/* JavaScript */
logoBlock.addEventListener('transitionend', function(event) {
    if (isExpanded && event.propertyName === 'width') { // adjust the property name as needed
        this.innerHTML = `
            <div class="image-container">
            <h2>Skills</h2>
                <div class"images">
                    <img src="../img/skills/html.png" class="skill-image">
                    <img src="../img/skills/css.png" class="skill-image">
                    <img src="../img/skills/php.png" class="skill-image">
                    <img src="../img/skills/js.png" class="skill-image">
                </div>
            </div>
        `;

        var imageContainer = this.querySelector('.image-container');

        // Add the visible class after a delay to trigger the transition
        setTimeout(() => {
            imageContainer.classList.add('visible');
        }, 0);

        // Remove the visible class once the transition is complete to prevent flickering
        imageContainer.addEventListener('transitionend', function() {
            if (event.propertyName === 'opacity') { // adjust the property name as needed
                this.classList.remove('visible');
            }
        }, { once: true });
    }
});