//Apparition progressive des images
const projects = document.querySelectorAll(".project__image")

let options = {
    // root: null,
    rootMargin: "-10% 0px",
    threshold: 0
}

function handleIntersect(entries) {
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1
        } else {
            entry.target.style.opacity = 0;
        }
    })
}

const observer = new IntersectionObserver
(handleIntersect, options)

projects.forEach(project => {
    observer.observe(project)
})



//Scroll to the top icon
const scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})