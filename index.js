

const btn = document.getElementById("btn");

let counter = 0;

const increment = (event) => event.target.innerText = ++counter;

btn.addEventListener(
    "click",
    increment
    // (e) => {
    //     e.target.innerText = ++counter;
    // }
);