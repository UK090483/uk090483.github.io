(function () {

    var loginButton = document.querySelector('#login-button')
    var loginOverlay = document.querySelector('#login-overlay')
    var loginCloseButton = document.querySelector('#login-close-button')
    var body = document.querySelector('body');
    var language = localStorage.getItem('lang');


    loginButton.addEventListener('click', handleLoginClick)
    loginCloseButton.addEventListener('click', handleCloseClick)

    function handleLoginClick(e) {
        e.preventDefault();
        bodyScrollLock.disableBodyScroll(body);
        loginOverlay.classList.add('login-overlay-active');
    }
    function handleCloseClick(e) {
        e.preventDefault();
        bodyScrollLock.enableBodyScroll(body);
        loginOverlay.classList.remove('login-overlay-active');
    }

    var langShifter = document.querySelector('#lang_shifter');
    var lang = langShifter.querySelectorAll('div');
    langShifter.addEventListener('click', handleLangshiftClick);


    if (language) {
        if (language === 'en') {
            body.classList.add('lang_en');
            body.classList.remove('lang_de');
            lang[0].classList.remove('lang_shifter_active');
            lang[1].classList.add('lang_shifter_active');
        }
    }

    function handleLangshiftClick() {

        lang[0].classList.toggle('lang_shifter_active');
        lang[1].classList.toggle('lang_shifter_active');
        body.classList.toggle('lang_en');
        body.classList.toggle('lang_de');

        if (body.classList.contains('lang_de')) {
            localStorage.setItem('lang', 'de');
        } else {
            localStorage.setItem('lang', 'en');
        }
    }

})();

