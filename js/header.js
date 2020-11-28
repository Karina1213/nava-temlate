function scrolledHeader() {
    const headerNav = document.getElementById('header')

    window.onscroll = function () {
        const scrolled = window.pageXOffset || document.documentElement.scrollTop;
        scrolled > 60 ? headerNav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)' : headerNav.style.backgroundColor = "transparent";
    }
}

scrolledHeader()