
// Intersection Observer

const loadingAnimation = function () {
    const load = document.querySelectorAll('.load');

    const show = (entries, observer) => {
        entries.forEach(element => {

            if (!element.isIntersecting) {
                return;
            } else {
                element.target.classList.add('fadeIn');
            };
            observer.unobserve(element.target);
        });
    };



    const Observer = new IntersectionObserver(show, { threshold: 0.7 });

    load.forEach(tb => Observer.observe(tb));
}
loadingAnimation();


// Show image modal

const galerija = document.querySelectorAll('.galerija img');
const popup = document.querySelector('.galerija_popup-slika');
const popImg = document.querySelector('.galerija_popup-slika img');



galerija.forEach(image => {

    popup.style.visibility = 'hidden';

    image.onclick = () => {
        popup.style.display = 'block';
        popup.style.visibility = 'visible';
        popImg.src = image.getAttribute('src');

    }
});


document.querySelector('.galerija_popup-slika span').onclick = () => {
    popup.style.display = 'none';
}