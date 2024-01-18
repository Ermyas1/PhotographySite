// const cursor = document.querySelector(".cursor")

// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.pageX + "px";
//     cursor.style.top = e.pageY + 'px';
// })
let text = document.querySelector('.title');
const leaf = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');
// let wrapper = document.querySelector('wrapper');
// console.log(wrapper[0])

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";

})
