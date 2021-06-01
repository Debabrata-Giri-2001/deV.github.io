var topByn = document.getElementById("topByn")
window.scrollbars = function () {
    scrollbars()
};

function scrollbars() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topByn.style.display = "block";
    } else {
        topByn.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


