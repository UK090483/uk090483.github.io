(function () {

    var loginButton = document.querySelector('#login-button')
    var loginOverlay = document.querySelector('#login-overlay')
    var loginCloseButton = document.querySelector('#login-close-button')
    var body = document.querySelector('body');

    loginButton.addEventListener('click', handleLoginClick)
    loginCloseButton.addEventListener('click', handleCloseClick)

    function handleLoginClick(e) {
        e.preventDefault()
        bodyScrollLock.disableBodyScroll(body);
        loginOverlay.classList.add('login-overlay-active')
    }
    function handleCloseClick(e) {
        e.preventDefault()
        bodyScrollLock.enableBodyScroll(body);
        loginOverlay.classList.remove('login-overlay-active')
    }

})();





