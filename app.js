// const cursor = document.querySelector(".cursor")
// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.pageX + "px";
//     console.log(e.pageX);
//     cursor.style.top = e.pageY + 'px';
//     console.log(e.pageY);
// })

let text = document.querySelector('.title');
const leaf = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

