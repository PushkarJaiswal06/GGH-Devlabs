// <--------------------loading page/effect------------------>

document.querySelectorAll(".reveal")
.forEach(function(elem){
    let parent= document.createElement("span")
    let child=document.createElement("span")
    parent.classList.add("parent")
    child.classList.add("child")
    child.innerHTML=elem.innerHTML
    elem.innerHTML=""
    parent.appendChild(child)
    elem.appendChild(parent)
    
})


var tl=gsap.timeline();

tl.to(".loader-top .parent .child",{
    y:("-100%"),
    delay:1.5,
    duration:0.9,
    ease:Back.easeOut
})
.to(".center .parent .child ",{
    x:("0%"),
    ease:Back.easeinOut,
    delay:-2,
    duration:0.5,
    stagger:0.2
})
.to(".center .parent .child",{
    y:("-100%"),
    duration:0.2,
    stagger:0.2
})
.to(".loader",{
    height:"0%",
    duration:2,
    ease:Expo.easeInOut
})
.to(".green-div",{
    height:"100%",
    duration:2,
    delay:-1.999,
    ease:Expo.easeInOut
})
.to(".landing-page",{
    height:"100%",
    duration:2,
    delay:-1.8,
    ease:Expo.easeInOut
})


// <--------------------landing page --------------->
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 0;
let other_1 = 1 % countItem;
let other_2 = 2 % countItem;

// Initial class setup
items[active].classList.add('active');
items[other_1].classList.add('other_1');
items[other_2].classList.add('other_2');

// Define the function that will update the slides
const changeSlider = () => {
    // Remove existing classes
    ['active', 'other_1', 'other_2'].forEach(cls => {
        let oldItem = document.querySelector(`.carousel .item.${cls}`);
        if (oldItem) oldItem.classList.remove(cls);
    });

    // Add new classes
    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');
};

// Handle the "next" button click
next.onclick = () => {
    active = (active + 1) % countItem;
    other_1 = (active - 1 + countItem) % countItem;
    other_2 = (active + 1) % countItem;
    changeSlider();
};

// Handle the "prev" button click
prev.onclick = () => {
    active = (active - 1 + countItem) % countItem;
    other_1 = (active + 1) % countItem;
    other_2 = (other_1 + 1) % countItem;
    changeSlider();
};

// Start auto-play after the initial setup
let autoPlay = setInterval(() => {
    next.click();
}, 2500);


