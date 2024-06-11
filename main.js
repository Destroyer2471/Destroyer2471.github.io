var scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

var modal = document.getElementById("myModal");

window.onload = function () {
    setTimeout(function () {
        modal.style.display = "block";
    }, 5000); // ѕоказать модальное окно через 5 секунд
};

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function openFullscreen(image) {
    var fullscreenImg = document.getElementById('fullscreen-img');
    fullscreenImg.src = image.src;
    document.getElementById('fullscreen').style.display = 'block';
}

function closeFullscreen() {
    document.getElementById('fullscreen').style.display = 'none';
}